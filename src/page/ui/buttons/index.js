import React from 'react'
import {Card, Button} from 'antd'
import './index.less';
export default class Buttons extends React.Component {
    constructor (prosp) {
        super(prosp);
        this.state = {
            loading: true
        };
    }
    closeLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }
    render () {
        return (
            <div>
                <Card title="普通按钮">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>
                <Card title="图形按钮">
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" icon="plus">Search</Button>
                    <Button shape="circle" icon="close" />
                    <Button icon="check">Search</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="danger" onClick={this.closeLoading}>{this.state.loading ? '关闭' : '打开'}</Button>
                </Card>
            </div>
        )
    }
}