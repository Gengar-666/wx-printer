# wx-printer-cpcl
>微信小程序连接热敏打印机打印标签

## 使用
该项目是在Taro3项目中编写，如需在其他小程序框架项目中使用，请自行修改
使用的打印机型号为汉印HM-A300，打印指令为CPCL指令
具体使用方法请至example页面查看

``` js
import BleConnector, { DeviceInfo } from '@/utils/bleConnector'
import PrinterUtil from '@/utils/printerUtil'

const bleConnector = new BleConnector()

// 初始化蓝牙模块
bleConnector.initBle()

// 初始化的适合不想自动连接上次连接过的设备请传false
bleConnector.initBle(false)

// 监听蓝牙适配器状态变化
bleConnector.listen('onAdapterStateChange', res => {
  console.log('蓝牙适配器是否可用：%s', res)
})

// 监听扫描
bleConnector.listen('onScanChange', res => {
  console.log('最新的扫描设备列表：%o', res)
})

// 监听设备连接状态
bleConnector.listen('onConnectChange', res => {
  console.log('设备连接状态：%s', res)
})

// 移除监听事件
bleConnector.remove('onAdapterStateChange')
bleConnector.remove('onScanChange')
bleConnector.remove('onConnectChange')

// 扫描设备
bleConnector.scanDevices()

// 连接设备，需要传入设备信息
bleConnector.connectDevice(device)

// 停止扫描
bleConnector.stopScanDevice()

// 断开设备连接
bleConnector.closeDevice()

// 关闭蓝牙模块
bleConnector.closeAdapter()

// 获取打印数据的arrayBuffer
const options = {
  offset: 0,
  xResolution: 200,
  yResolution: 200,
  height: 200,
  printCount: 1
}

// 第一种方式，适合简单的模版
let { buffer, cpclString } = new PrinterUtil(options)
  .printlnText('条形码', 0, 10, 10)
  .printTextBarCode('13213231241242141', 80, 10, 50)
  .printlnText('----------------------------------------', 0, 10, 150)
  .printlnText('二维码', 0, 10, 180)
  .printQRCode('1232131232131231', 10, 10, 230)

// 第二种方式，直接写CPCL指令
// let { buffer, cpclString } = new PrinterUtil(options)
//   .setCpclString(`T 8 0 10 10 条形码 
//   BT 7 0 5
//   B 128 1 1 80 10 50 13213231241242141
//   BT OFF
//   T 8 0 10 150 ---------------------------------------- 
//   T 8 0 10 180 二维码 
//   B QR 10 230 M 2 U 10
//   M0A,QR code 1232131232131231
//   ENDQR
//   `)

console.log('🖨️设备需要写入的buffer数据：%o', buffer)
console.log('当前需要打印的内容cpcl格式编码字符串：%s', cpclString)

// 写数据
bleConnector.write(buffer)
```