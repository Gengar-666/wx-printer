import {
  BLE_ADAPTER_STATE_CHANGE,
  BLE_CONNECT_CHANGE,
  BLE_SCAN_CHANGE
} from './events'

export type Event =
  typeof BLE_ADAPTER_STATE_CHANGE
  | typeof BLE_CONNECT_CHANGE
  | typeof BLE_SCAN_CHANGE

/** 设备信息 */
export interface DeviceInfo {
  /** 
   * 蓝牙设备名称，某些设备可能没有 
   */
  name: string;

  /** 
   * 用于区分设备的 id 
   */
  deviceId: string;

  /** 
   * 当前蓝牙设备的信号强度
   */
  RSSI: number;

  /** 
   * 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段 
   */
  advertisData: ArrayBuffer;

  /** 
   * 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段
   */
  advertisServiceUUIDs: string[];

  /** 
   当前蓝牙设备的广播数据段中的 LocalName 数据段 
   */
  localName: string;

  /**
   *  当前蓝牙设备的广播数据段中的 ServiceData 数据段
   */
  serviceData: {}
}

const _LISTEN_EVENTS = Symbol('listenEvents')

/**
 * 封装蓝牙设备连接类
 */
class BleConnector {
  /**
   * 蓝牙是否打开
   */
  public adapterIsOpen: boolean

  /**
   * 当前扫描到的所有设备
   */
  public devices: DeviceInfo[]

  /**
   * 设备是否已经链接
   */
  public connected: boolean

  /** 
   * 当前连接的设备信息
   */
  public connectDeviceInfo: DeviceInfo

  /**
   * 当前连接设备是否支持写入数据
   */
  public canWrite: boolean

  /**
   * 当前用来写入的服务 uuid
   */
  public UU_serviceId: string;

  /** 
   * 当前用来写入的特征值 uuid
   */
  public UU_characteristicId: string;

  /**
   * 当前监听的事件集合
   */
  private [_LISTEN_EVENTS]: { event: Event, cb?: (res?) => void }[]

  constructor() {
    this.adapterIsOpen = false
    this.connected = false
    this.devices = []
    this.connectDeviceInfo = {} as DeviceInfo
    this.canWrite = false
    this[_LISTEN_EVENTS] = []
  }

  /** 
   * 初始化蓝牙模块 
   @param {boolean} autoConnect 是否自动连接上次连接的设备，默认为true
   */
  public initBle = async (autoConnect = true) => {
    await wx.openBluetoothAdapter()
    this.adapterIsOpen = true
    console.log('🌟🌟🌟 蓝牙模块初始化成功')

    this[BLE_ADAPTER_STATE_CHANGE]()
    this[BLE_SCAN_CHANGE]()
    this[BLE_CONNECT_CHANGE]()

    // 自动连接上次连接的设备
    if (autoConnect) {
      const LAST_CONNECT_DEVICE_INFO = wx.getStorageSync('LAST_CONNECT_DEVICE_INFO')
      LAST_CONNECT_DEVICE_INFO && this.connectDevice(LAST_CONNECT_DEVICE_INFO)
    }

    return this
  }

  /**
   * 开始搜寻附近的蓝牙外围设备。此操作比较耗费系统资源，
   * 请在搜索并连接到设备后调用 wx.stopBluetoothDevicesDiscovery 方法停止搜索。
   */
  public scanDevices = () => {
    if (this.adapterIsOpen) {
      wx.startBluetoothDevicesDiscovery({ allowDuplicatesKey: true })
    } else {
      console.log('❌❌❌ 扫描失败，蓝牙设备未打开')
    }
  }

  /**
   * 停止搜寻附近的蓝牙外围设备。
   * 若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
   */
  public stopScanDevice = () => {
    wx.stopBluetoothDevicesDiscovery()
  }

  /**
   * 连接设备
   * @param device 当前需要连接的设备的信息
   */
  public connectDevice = async (device: DeviceInfo) => {
    const { deviceId } = device

    // 连接低功耗蓝牙设备。
    await wx.createBLEConnection({ deviceId })
    this.connectDeviceInfo = device

    const res = await this.findWriteService(deviceId)

    if (res) {
      console.log('🌈🌈🌈 可写入设备连接成功')
      this.canWrite = true
      this.UU_serviceId = res.serviceId
      this.UU_characteristicId = res.characteristicId

      // 将连接的设备保存到缓存中，方便下次进入小程序的时候直接连接
      wx.setStorage({ key: 'LAST_CONNECT_DEVICE_INFO', data: device })
    } else {
      console.log('☔️☔️☔️ 设备不支持写入')
    }
  }

  /** 寻找可以写入的服务和特征 */
  private findWriteService = async (deviceId: string) => {
    let _serviceId, _characteristicId;

    // 获取蓝牙设备所有服务(service)
    const { services } = await wx.getBLEDeviceServices({ deviceId })

    for (let i = 0; i < services.length; i++) {
      let service = services[i]
      if (service.isPrimary) {
        // 获取蓝牙设备某个服务中所有特征值(characteristic)
        const { characteristics } = await wx.getBLEDeviceCharacteristics({ deviceId, serviceId: service.uuid })

        // 获取所有特征里拥有写入权限的特征
        const _chs = characteristics.find(chs => chs.properties.write)

        // 如果找到可以写的特征则跳出循环
        if (_chs) {
          _serviceId = service.uuid
          _characteristicId = _chs.uuid
          break
        }
      }
    }

    if (_serviceId && _characteristicId) {
      return {
        serviceId: _serviceId,
        characteristicId: _characteristicId
      }
    }
  }

  /**
   * 写入二进制数据
   * @param buffer 
   */
  public write = (buffer: ArrayBuffer) => {
    if (this.connected && this.canWrite) {
      // 1.并行调用多次会存在写失败的可能
      // 2.建议每次写入不超过20字节
      // 3.分包处理，延时调用
      const maxChunk = 20;
      const delay = 20;

      for (let i = 0, j = 0, length = buffer.byteLength; i < length; i += maxChunk, j++) {
        let subPackage = buffer.slice(i, i + maxChunk <= length ? (i + maxChunk) : length);
        setTimeout(() => wx.writeBLECharacteristicValue({
          deviceId: this.connectDeviceInfo.deviceId,
          serviceId: this.UU_serviceId,
          characteristicId: this.UU_characteristicId,
          value: subPackage
        }), j * delay);
      }
    } else {
      console.log('⚠️⚠️⚠️ 设备未连接不支持或不支持写入')
    }
  }


  /** 断开设备连接 */
  public closeDevice = () => {
    if (this.connected && this.connectDeviceInfo) {
      wx.closeBLEConnection({ deviceId: this.connectDeviceInfo.deviceId })
      this.connectDeviceInfo = {} as DeviceInfo
      wx.removeStorage({ key: 'LAST_CONNECT_DEVICE_INFO' })
    }
  }

  /**
   * 绑定监听事件
   * @param event
   * @param cb
   */
  public listen = (event: Event, cb?: (res?) => void) => {
    const idx = this[_LISTEN_EVENTS].findIndex(i => i.event === event)
    if (idx !== -1) {
      return false
    }
    this[_LISTEN_EVENTS].push({ event, cb })
  }

  /**
   * 移除监听事件
   * @param event
   * @param cb
   */
  public removeListen = (event: Event) => {
    const idx = this[_LISTEN_EVENTS].findIndex(i => i.event === event)
    if (idx === -1) {
      return false
    }
    this[_LISTEN_EVENTS].splice(idx, 1)
  }

  private [BLE_SCAN_CHANGE] = () => {
    wx.onBluetoothDeviceFound(res => {
      res.devices.map(device => {
        if (!device.name && !device.localName) {
          return
        }
        // 设备是否已经存在
        const idx = this.devices.findIndex(i => i.deviceId === device.deviceId)

        // 不存在就添加设备，存在就更新设备信息
        if (idx === -1) {
          this.devices.push(device)
        } else {
          this.devices[idx] = device
        }
      })

      let scanEvent = this[_LISTEN_EVENTS].find(i => i.event === 'onScanChange')
      scanEvent && scanEvent.cb && scanEvent.cb(this.devices)
    })
  }

  private [BLE_ADAPTER_STATE_CHANGE] = () => {
    wx.onBluetoothAdapterStateChange(res => {
      this.adapterIsOpen = res.available
      let adapterEvent = this[_LISTEN_EVENTS].find(i => i.event === 'onAdapterStateChange')
      adapterEvent && adapterEvent.cb && adapterEvent.cb(this.adapterIsOpen)
    })
  }

  private [BLE_CONNECT_CHANGE] = () => {
    wx.onBLEConnectionStateChange(res => {
      this.connected = res.connected
      let connectEvent = this[_LISTEN_EVENTS].find(i => i.event === 'onConnectChange')
      connectEvent && connectEvent.cb && connectEvent.cb(this.connected)
    })
  }

  /**
   * 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源
   */
  public closeAdapter = () => {
    wx.closeBluetoothAdapter()
  }
}

export default BleConnector