import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'
import BleConnector, { DeviceInfo } from '@/utils/bleConnector'
import PrinterUtil from '@/utils/printerUtil'
import './index.scss'

interface IProps { }

interface IState {
  /**
   * 当前扫描的所有设备
   */
  devices: DeviceInfo[]
  /**
   * 当前连接的设备
   */
  connectDeviceInfo: DeviceInfo
  /**
   * 设备是否连接
   */
  connected: boolean
}

const bleConnector = new BleConnector()

export default class Index extends Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      devices: [],
      connected: false,
      connectDeviceInfo: {} as DeviceInfo
    }
  }

  public componentDidMount() {
    this.init()
  }

  public componentWillUnmount() {
    // 组件销毁的时候关闭蓝牙模块
    bleConnector.closeAdapter()
  }

  public init() {
    // 初始化蓝牙模块
    bleConnector.initBle()

    // 监听蓝牙适配器状态变化
    bleConnector.listen('onAdapterStateChange', res => {
      console.log('蓝牙适配器是否可用：%s', res)
    })

    // 监听扫描
    bleConnector.listen('onScanChange', res => {
      console.log('最新的扫描设备列表：%o', res)
      this.setState({ devices: res })
    })

    // 监听设备连接状态
    bleConnector.listen('onConnectChange', res => {
      console.log('设备连接状态：%s', res)
      this.setState({ connected: res })
      // 如果设备连接上了停止扫描
      res && bleConnector.stopScanDevice()
    })
  }

  // 连接设备
  public connect(device: DeviceInfo) {
    bleConnector.connectDevice(device)
  }

  // 向设备发送数据
  public write() {
    const options = {
      offset: 0,
      xResolution: 200,
      yResolution: 200,
      height: 200,
      printCount: 1
    }

    // 第一种方式，适合简单的模版
    // let { buffer, cpclString } = new PrinterUtil(options)
    //   .printlnText('条形码', 0, 10, 10)
    //   .printTextBarCode('13213231241242141', 80, 10, 50)
    //   .printlnText('----------------------------------------', 0, 10, 150)
    //   .printlnText('二维码', 0, 10, 180)
    //   .printQRCode('1232131232131231', 10, 10, 230)

    // 第二种方式，直接写CPCL指令，适合复杂的模版
    let { buffer, cpclString } = new PrinterUtil(options)
      .setCpclString(`PAGE-WIDTH 576
    BOX 0 0 576 664 2
    LINE 0 88 576 88 1
    LINE 0 216 576 216 1
    LINE 0 296 576 296 1
    LINE 0 440 528 440 1
    LINE 0 568 528 568 1
    LINE 0 664 528 664 1
    LINE 528 296 528 664 1
    LINE 48 296 48 568 1
    CENTER
    BARCODE 128 2 3 80 0 100 363604310467
    SETSP 12
    T 8 0 0 188 363604310467
    SETSP O
    SETMAG 2 2 
    T 8 0 0  236 上海 上海市 长宁区
    SETMAG 1 1 
    LEFT
    SETBOLD 1
    T 4 0 64 320 申大通 13826514987
    T 4 0 64 363 上海市宝山区共和新路4719弄共
    T 4 0 64 395 和小区12号306室
    SETBOLD 0
    T 8 0 13.6 334.4 收
    T 8 0 13.6 380.4 件
    T 8 0 13.6 470.4 发
    T 8 0 13.6 516.4 件
    T 8 0 64 464 快小宝 13826514987
    T 8 0 64 500.8 上海市长宁区北曜路1178号（鑫达商务楼）
    T 8 0 64 528.8 1号楼305室
    T 8 0 541.6 400 派
    T 8 0 541.6 464 件
    T 8 0 541.6 528 联
    T 8 0 16 586.4 签收人/签收时间
    T 55 0 16 615.2 你的签字代表您已验收此包裹，并已确认商品信息
    T 55 0 16 639.2 无误,包装完好,没有划痕,破损等表面质量问题。               
    T 8 0 450 629.2 月  日
    BOX 0 696 576 968 2
    LINE 0 776 576 776 1
    LINE 0 912 528 912 1
    LINE 48 776 48 912 1
    LINE 0 968 576 968 1
    LINE 528 776 528 968 1
    BARCODE 128 1 3 36 352 712 363604310467
    SETSP 10
    T 55 0 352 752 363604310467
    SETSP 0
    T 8 0 13.6 810.4 发
    T 8 0 13.6 856.4 件
    T 8 0 64 804 快小宝 13826514987
    T 8 0 64 840.8 上海市长宁区北曜路1178号（鑫达商务楼）
    T 8 0 64 868.8 1号楼305室
    T 8 0 541.6 808 客
    T 8 0 541.6 862 户
    T 8 0 541.6 916 联
    T 8 0 16 928 物品：
    BOX 0 1000 576 1408 2
    LINE 0 1080 576 1080 1
    LINE 0 1216 528 1216 1
    LINE 0 1352 528 1352 1
    LINE 0 1408 576 1408 1
    LINE 48 1080 48 1352 1
    LINE 528 1080 528 1408 1
    BARCODE 128 1 3 36 352 1016 363604310467
    SETSP 10
    T 55 0 352 1056 363604310467
    SETSP 0
    T 8 0 13.6 1114.4 收
    T 8 0 13.6 1160.4 件
    T 8 0 13.6 1250.4 发
    T 8 0 13.6 1296.4 件
    T 8 0 64 1108 申大通 13826514987
    T 8 0 64 1144.8 上海市宝山区共和新路4719弄共
    T 8 0 64 1172.8 和小区12号306室
    T 8 0 64 1244 快小宝 13826514987
    T 8 0 64 1280.8 上海市长宁区北曜路1178号（鑫达商务楼）
    T 8 0 64 1308.8 1号楼305室
    T 8 0 13.6 1368 物品：
    T 8 0 541.6 1164.8 寄
    T 8 0 541.6 1234.8 件
    T 8 0 541.6 1304.8 联
    `)

    console.log('🖨️设备需要写入的buffer数据：%o', buffer)
    console.log('当前需要打印的内容cpcl格式编码字符串：%s', cpclString)

    bleConnector.write(buffer)
  }

  public render() {
    const { devices, connected, connectDeviceInfo } = this.state

    return (
      <View style={{ padding: '20px' }}>
        {devices.length > 0 && <View>
          <View>搜索到的设备：</View>
          {devices.map(device => (
            <View
              onClick={this.connect.bind(this, device)}
              style={{ marginTop: '10px', paddingBottom: '10px', borderBottom: '1px solid #000' }}
              key={device.deviceId}
            >
              <View>设备名称：{device.name}</View>
              <View>信号强度：{device.RSSI}dBm</View>
            </View>
          ))}
        </View>}

        <Button style={{ marginTop: '10px' }} onClick={bleConnector.scanDevices} type='primary'>搜索设备</Button>

        {connected && <View>
          <View style={{ marginTop: '20px' }}>已连接的设备：</View>
          <View>
            <View>设备名称：{connectDeviceInfo.name}</View>
            <View>信号强度：{connectDeviceInfo.RSSI}dBm</View>
          </View>
          <Button style={{ marginTop: '10px' }} onClick={this.write} type='warn'>写入数据</Button>
          <Button style={{ marginTop: '10px' }} onClick={bleConnector.closeDevice}>断开连接</Button>
        </View>}
      </View>
    )
  }
}