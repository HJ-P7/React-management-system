import React from 'react'
import {Card, Button, message} from 'antd'

export default function Index() {
  // function showMessage(type) {
  //   message[type]('hello world')
  // }
  const showMessage = (type) => {
    message[type]('hello world')
  }
  return (
    <div>
      <Card title="提示框">
        <Button type="primary" onClick={() => showMessage('success')}>success</Button>
        <Button type="info" onClick={() => showMessage('info')}>info</Button>
        <Button type="danger" onClick={() => showMessage('error')}>error</Button>
      </Card>
    </div>
  )
}
