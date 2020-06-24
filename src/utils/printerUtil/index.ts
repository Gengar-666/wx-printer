import { encode64gb2312 } from './base64gb2312'

const _str = Symbol('CPCL.String')

interface InitOptions {
  /**
   * 整个标签的横向偏移量
   */
  offset: number,
  /**
   * 横向分辨率
   */
  xResolution: number,
  /**
   * 纵向分辨率
   */
  yResolution: number,
  /**
   * 标签的最大高度
   */
  height: number,
  /**
   * 要打印的标签数量
   */
  printCount: number
}

class Printer {
  // CPCL数据字符串
  private [_str]

  /**
   * 初始化标签
   * @param options 
   * @param options.offset 整个标签的横向偏移量
   * @param options.xResolution 横向分辨率
   * @param options.yResolution 纵向分辨率
   * @param options.height 标签的最大高度
   * @param options.printCount 要打印的标签数量
   * @returns {*} Printer
   */
  constructor(options: InitOptions) {
    const { offset, xResolution, yResolution, height, printCount } = options
    this[_str] = `! ${offset} ${xResolution} ${yResolution} ${height} ${printCount}\r\n`
  }

  /**
   * 打印文本并换行
   * @param text 文本内容
   * @param fontSize 字体大小
   * @param x 横向起始位置
   * @param y 纵向起始位置
   */
  public printlnText(text: string, fontSize = 0, x = 0, y = 0) {
    this[_str] += `T 8 ${fontSize} ${x} ${y} ${text} \r\n`
    return this
  }

  /**
   * 打印横向条形码
   * @param data 条码数据
   * @param height 条码的单位高度
   * @param x 横向起始位置
   * @param y 纵向起始位置
   */
  public printBarCode(data: string, height = 50, x = 0, y = 0) {
    this[_str] += `B 128 1 1 ${height} ${x} ${y} ${data}\r\n`
    return this
  }

  /**
   * 打印携带文本的横向条形码
   * @param data 条码数据
   * @param height 条码的单位高度
   * @param x 横向起始位置
   * @param y 纵向起始位置
   */
  public printTextBarCode(data: string, height = 50, x = 0, y = 0) {
    this[_str] += `BT 7 0 5\r\nB 128 1 1 ${height} ${x} ${y} ${data}\r\nBT OFF\r\n`
    return this
  }

  /**
   * 打印纵向条形码
   * @param data 条码数据
   * @param height 条码的单位高度
   * @param x 横向起始位置
   * @param y 纵向起始位置
   */
  public printVbarCode(data: string, height = 50, x = 0, y = 0) {
    this[_str] += `VB 128 1 1 ${height} ${x} ${y} ${data}\r\n`
    return this
  }

  /**
   * 打印携带文本的纵向条形码
   * @param data 条码数据
   * @param height 条码的单位高度
   * @param x 横向起始位置
   * @param y 纵向起始位置
   */
  public printTextVbarCode(data: string, height = 50, x = 0, y = 0) {
    this[_str] += `BT 7 0 5\r\nVB 128 1 1 ${height} ${x} ${y} ${data}\r\nBT OFF\r\n`
    return this
  }

  /**
   * 打印二维码
   * @param data 填入二维码的数据
   * @param uWidthAndHeight 模块的单位宽度/单位高度
   * @param x 横向起始位置
   * @param y 纵向起始位置
   */
  public printQRCode(data: string, uWidthAndHeight = 5, x = 0, y = 0) {
    this[_str] += `B QR ${x} ${y} M 2 U ${uWidthAndHeight}\r\nM0A,QR code ${data}\r\nENDQR\r\n`
    return this
  }

  /**
   * 设置对齐方式 center left right
   * @param alignType 对齐方式
   */
  public setAlign(alignType: 'ct' | 'CT' | 'lt' | 'LT' | 'rt' | 'RT') {
    enum align {
      'ct' = 'CENTER',
      'CT' = 'CENTER',
      'lt' = 'LEFT',
      'LT' = 'LEFT',
      'rt' = 'RIGHT',
      'Rt' = 'RIGHT'
    }
    this[_str] += `${align[alignType]}\r\n`;
    return this
  }

  /**
   * 添加CPCL格式字符数据
   * @param printString 
   */
  public setCpclString = (printString: string) => {
    this[_str] += printString.replace(/\n/gm, '\r\n')
    return this
  }

  /** 
   * 获取当前需要打印的字符串数据 
   */
  get cpclString() {
    if (!new RegExp(`FORM\r\nPRINT\r\n`).test(this[_str])) {
      this[_str] += `FORM\r\nPRINT\r\n`
    }
    return this[_str]
  }

  /** 
   * 获取ArrayBuffer
   */
  get buffer() {
    if (!new RegExp(`FORM\r\nPRINT\r\n`).test(this[_str])) {
      this[_str] += `FORM\r\nPRINT\r\n`
    }
    return wx.base64ToArrayBuffer(encode64gb2312(this[_str]))
  }
}

export default Printer;