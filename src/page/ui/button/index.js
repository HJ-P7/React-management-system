import React, { memo, useState } from 'react'
import { Card, Button, Radio } from 'antd'
import './index.scss'
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined
  } from '@ant-design/icons'
import ButtonGroup from 'antd/lib/button/button-group'

// React.memo是一个高阶组件,memo类似于PureComponent,不同的是,memo是一个function组件
export default memo(function Index() {
  const [loading, setLoadnig] = useState(true)
  const [size, setSize] = useState('default')
  return (
    <div className='wrap'>
      <Card title='基础款按钮' className='button-wrap'>
        <Button>金渡教育</Button>
        <Button type='primary'>金渡教育</Button>
        <Button type='danger'>金渡教育</Button>
        <Button type='dashed'>金渡教育</Button>
      </Card>

      <Card title='图表款按钮组' className='button-wrap'>
        <Button icon={<PlusOutlined />}>添加</Button>
        <Button icon={<DeleteOutlined />}>删除</Button>
        <Button icon={<EditOutlined />}>修改</Button>
        <Button icon={<SearchOutlined />}>查找</Button>
        <Button icon={<SearchOutlined />} shape='circle'></Button>
        <Button icon={<SearchOutlined />} shape='round'></Button>
      </Card>

      <Card title='loading按钮' className='button-wrap'>
        <Button type='primary' loading={loading}>加载中</Button>
        <Button onClick={e=>close()}>关闭加载</Button>
        <Button onClick={e=>open()}>打开加载</Button>
      </Card>

      <Card title='按钮组' className='button-wrap'>
        <ButtonGroup>
          <Button icon={<LeftOutlined />}>向左</Button>
          <Button icon={<RightOutlined />}>向右</Button>
        </ButtonGroup>
      </Card>

      <Card title='控制按钮尺寸' className='button-wrap'>
        <Radio.Group value={size} onChange={e=>changeSize(e)}>
          <Radio value='large'>大</Radio>
          <Radio value='default'>中</Radio>
          <Radio value='small'>小</Radio>
        </Radio.Group>
          <Button type='primary' size={size}>金渡教育</Button>
          <Button type='danger' size={size}>金渡教育</Button>
          <Button type='dashed' size={size}>金渡教育</Button>

      </Card>


    </div>
  )
  function open() {
    setLoadnig(true)
  }
  function close() {
    setLoadnig(false)
  }
  function changeSize(e) {
    console.log(e)
    setSize(e.target.value)
  }
})