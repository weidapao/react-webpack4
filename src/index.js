import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import style from './index.css'
import App from './App'
// 还需要在主要的js文件里写入下面这段代码
if (module.hot) {
  // 实现热更新
  module.hot.accept()
}
const Index = () => {
  return <App />
}

ReactDOM.render(<Index />, document.getElementById('index'))
