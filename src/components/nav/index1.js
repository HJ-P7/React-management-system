import React, { Component } from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export class index extends Component {
    render() {
        return (
            <div className='nav-left'>
                <div style={{ width: 256 }}>
                    <Menu mode="inline" theme="dark" 
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['hah1']}>
                        <Menu.Item key="1" icon={<MailOutlined />}>
                            Navigation One
                        </Menu.Item>
                        <Menu.Item key="2" disabled icon={<AppstoreOutlined />}>
                            Navigation Two
                        </Menu.Item>
                        <SubMenu key="hah1" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="haha2">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                Navigation Four - Link
                            </a>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default index