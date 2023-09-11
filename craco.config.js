//react-scripts": "5.0.1" 对应 npm install @craco/craco@alpha -D   
//想启用，得改package.json start和build改为craco

//-D 代表开发依赖
const path = require('path')
// craco.config.js 所在的路径
const resolve = pathname => path.resolve(__dirname,pathname) 

const CracoLessPlugin = require('craco-less')

module.exports = {
  //less  npm i craco-less@2.1.0-alpha.0 
  // 对应  @craco/craco": "^7.0.0-alpha.9
  plugins:[
    {
      plugin:CracoLessPlugin
    }
  ],

  //webpack
  webpack:{
    alias:{
      "@":resolve("src"),
      "components":resolve("src/components"),
      "utils":resolve("src/utils")
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}