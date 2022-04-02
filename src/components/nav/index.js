import React, { Component } from 'react'
import { Menu } from 'antd';
import menuConfig from '../../config/menu';
import './index.scss'
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

export class index extends Component {
    state = {
        menuItem: ''
    }
    componentDidMount() {
        let menuItem = this.getMenuItem(menuConfig)
        // console.log(menuItem)
        this.setState({menuItem})
    }
    // 获取菜单方法,直接遍历
    getMenuItem = (data) => {
        // console.log(data)
        return data.map(item => {
            if (item.children) {
                return <SubMenu key={item.key} title={item.title}>
                    {this.getMenuItem(item.children)}
                    {/* {
                        item.children.map(items => {
                            // console.log(items)
                            return <Menu.Item key={items.key} title={items.title}>{items.title}</Menu.Item>
                        })
                    } */}
                </SubMenu>
            } else {
                return <Menu.Item key={item.key} title={item.title}>
                    <Link to={item.key}>{item.title}</Link>
                </Menu.Item>
            }
        })
    }
    
    render() {
        return (
            <div>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg"/>
                    <h1>金渡CMS</h1>
                </div>
                    <Menu mode="inline" theme="dark">
                        {this.state.menuItem}
                    </Menu>
            </div>
        );
    }
}

export default index