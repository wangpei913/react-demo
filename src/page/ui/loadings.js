import React from 'react'
import {Card, Alert, Spin, Icon } from 'antd'
export default class Loadings extends React.Component {
    // constructor (prosp) {
    //     super(prosp);
    // }
    state = {
        spinning: true
    }
    componentDidMount () {
        this.timerOut = setTimeout(() => {
            this.setState({
                spinning: false
            })
        }, 3000);
    }
    componentWillUnmount () {
        clearTimeout(this.timerOut);
    }
    render () {
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        return (
            <div>
                <Card title="loading加载">
                    <Spin tip="加载中..." indicator={antIcon} spinning={this.state.spinning}>
                        <Alert 
                            message="Success Tips"
                            description="Detailed description and advices about successful copywriting.">
                        </Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}