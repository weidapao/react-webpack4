import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import style from './index.css'
// 还需要在主要的js文件里写入下面这段代码
if (module.hot) {
  // 实现热更新
  module.hot.accept()
}
const Index = () => {
  return (
    <div className={style.background} style={{ background: 'green' }}>
      {/* <Button type="danger">999</Button> */}
      <Button type="dashed">1111</Button>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('index'))
