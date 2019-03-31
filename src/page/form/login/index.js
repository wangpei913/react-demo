import React from 'react'
import {Card, Form, Input, Button, Icon, message, Checkbox} from 'antd'
class Login extends React.Component {
    handleSubmit () {
        // let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, res) => {
            if (!err) {
                message.success(`${res.userName}的密码是${res.passWord}`);
            }
        })
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="form登录表单">
                    <Form style={{maxWidth: 300}}>
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [
                                    { required: true, message: 'Please input your username!' },
                                    {
                                        min: 5,
                                        max: 8,
                                        message: '长度不在范围内'
                                    }
                                ],
                                initialValue: ''
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('passWord', {
                                rules: [
                                    { required: true, message: 'Please input your username!' }
                                ],
                                initialValue: ''
                            })(
                                <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <a style={{float: "right"}} href="#额">忘记密码</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.handleSubmit.bind(this)}>登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Login)