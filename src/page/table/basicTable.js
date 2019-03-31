import React from 'react';
import {Card, Table} from 'antd';
import {tableList} from '../../api/index';
export default class BasicTable extends React.Component {
    state = {
        loading: false,
        columns: [],
        data: []
    }
    componentDidMount () {
        const columns = [
            {
                title: '序号',
                dataIndex: 'id',
                key: '0',
                align: 'center',
                render: text => <span>{text}</span>,
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                key: '1',
                align: 'center',
                render: text => <span>{text}</span>,
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: '2',
                align: 'center',
                render: text => <span>{text === 0 ? '男' : '女'}</span>,
            },
            {
                title: '状态',
                dataIndex: 'state',
                key: '3',
                align: 'center',
                render: text => <span>{text === 0 ? '男' : '女'}</span>,
            },
            {
                title: '兴趣',
                dataIndex: 'interest',
                key: '4',
                align: 'center',
                render: text => <span>{text === 0 ? '男' : '女'}</span>,
            },
            {
                title: '生日',
                dataIndex: 'birthDay',
                key: '5',
                align: 'center',
                render: text => <span>{text}</span>,
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: '6',
                align: 'center',
                render: text => <span>{text}</span>,
            },
            {
                title: '时间',
                dataIndex: 'time',
                key: '7',
                align: 'center',
                render: text => <span>{text}</span>,
            }
        ];
        this.setState({
            columns: columns
        });
        this.requestTableData();
    }
    // 获取表格数据
    requestTableData = () => {
        let params = {
            pageSize: 1,
            pageNum: 10
        }
        tableList(params).then((res => {
            this.setState({
                loading: true
            })
            if (res.code === 0) {
                this.setState({
                    loading: false,
                    data: res.result
                })
            }
        }))
    }
    render () {
        return (
            <div>
                <Card title="表格数据展示">
                    <Table columns={this.state.columns} dataSource={this.state.data} rowKey="id"/>
                </Card>
            </div>
        )
    }
}