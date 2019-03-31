import React from 'react'
import {Card, Button, notification, Icon } from 'antd'
export default class Loadings extends React.Component {
    openNotification (placement) {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            placement: placement
          });
    }
    render () {
        return (
            <div>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={this.openNotification.bind(this, 'bottomLeft')}>bottomLeft</Button>
                    <Button type="primary" onClick={this.openNotification.bind(this, 'bottomRight')}>bottomRight</Button>
                </Card>
            </div>
        )
    }
}