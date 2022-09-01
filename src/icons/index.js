// 导入icon图标
// 完成SvgIcon的全局注册
import SvgIcon from '@/components/Svgicon'

// webpack.docschina.org
const svgRequire = require.context('./svg', false, /\.svg$/)

/**
 * 此时返回一个Require函数，可以接收一个request的参数，用于require的导入
 * 该函数提供了三个属性，可以通过svgRequire.keys()获得所有的svg图标
 * 遍历图标，吧图标作为request的参数入到svgRerquire导入函数中，完成本地svg图标的导入
 */
// console.log(svgRequire.keys())
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
