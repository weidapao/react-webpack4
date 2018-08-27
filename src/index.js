import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'

const Index = () => {
  return (
    <div>
      <Button type="danger">1</Button>
      <Button type="dashed">23</Button>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('index'))
