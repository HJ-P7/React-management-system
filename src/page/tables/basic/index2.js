import React, { Component } from 'react'
import { Card, Table } from 'antd'
import axios from 'axios'

export class Index extends Component {
    state = {
        data: []
    }
    async componentDidMount() {
        const { data } = await axios.get("http://localhost:3001/user")
        console.log(data)
        this.setState({data: data.user})
    }
    render() {
        const colums = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '姓名',
                dataIndex: 'name'
            },
            {
                title: '年龄',
                dataIndex: 'age'
            },
            {
                title: '性别',
                dataIndex: 'isMale',
                render(isMale) {
                    return isMale === true ? '男' : '女'
                }
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '手机号',
                dataIndex: 'phone'
            }
        ]
        return (
            <div>
                <Card title='基础表格'>
                    <Table dataSource={this.state.data} columns={colums} />
                </Card>
            </div>
        )
    }
}

export default Index