import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import {Menu} from 'antd';
import menuList from '../../resource/menuConfig';
import './index.less';

const SubMenu = Menu.SubMenu;
export default class NavList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    componentDidMount () {
        const menuNode = this.renderMenu(menuList);
        this.setState({
            menuNode
        })
    }
    // 渲染菜单树
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.title}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render () {
        return (
            <div className="navlist-content">
                <div className="navlist-logo">
                    <img src={logo} alt="logo"></img>
                    <p>Facebook-React</p>
                </div>
                <div className="navlist-menu">
                    <Menu
                        theme='dark'>
                        {this.state.menuNode}
                    </Menu>
                </div>
            </div>
        )
    }
}