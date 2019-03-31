import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/header';
import Footer from './components/footer';
import NavList from './components/nav';
import './admin.less';
export default class Admin extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    
    render () {
        return (
            <Row className="admin-content">
                <Col span={4} className="admin-content-left">
                    <NavList></NavList>
                </Col>
                <Col span={20} className="admin-content-right">
                    <Header></Header>
                    <Row className="center-router">
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}