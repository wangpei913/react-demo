import React from 'react'
import {Card, Button, Modal} from 'antd'
export default class Buttons extends React.Component {
    constructor (prosp) {
        super(prosp);
        this.state = {
            visible: false
        };
    }
    handleModal = () => {
        this.setState({
            visible: true
        })
    }
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    render () {
        return (
            <div>
                <Card title="模态框">
                    <Button onClick={this.handleModal}>open</Button>
                </Card>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="好的"
                    cancelText="算了">
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}