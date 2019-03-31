import React from 'react'
import {Card, Tabs, Icon, message, Row, Col} from 'antd'

const TabPane = Tabs.TabPane;
export default class Tab extends React.Component {
    state = {
        tabPane: []
    }
    componentDidMount () {
        const tabs = [
            {
                title: '安卓',
                content: '安卓内容',
                key: '1',
                icon: 'android'
            },
            {
                title: '苹果',
                content: '苹果内容',
                key: '2',
                icon: 'apple'
            },
            {
                title: 'Windows',
                content: 'Windows内容',
                key: '3',
                icon: 'windows'
            }
        ]
        this.setState({
            tabPane: tabs
        })
    }
    handleCallback (e) {
        message.info(`打开的是第${e}个Tab`);
    }
    render () {
        const colLayout = {
            xs: 24,
            sm: 2,
            md: 4,
            lg: 6,
            xl: 8
        }
        return (
            <div>
                <Card title="tab页切换">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback.bind(this)}>
                        {
                            this.state.tabPane.map((item) => {
                                return <TabPane tab={<span><Icon type={item.icon} />{item.title}</span>} key={item.key}>
                                    {item.content}
                                </TabPane>
                            })
                        }
                    </Tabs>
                </Card>
                <Card title="响应式栅格">
                    <Row>
                        <Col {...colLayout}>Col</Col>
                        <Col {...colLayout}>Col</Col>
                        <Col {...colLayout}>Col</Col>
                    </Row>
                </Card>
            </div>
        )
    }
}