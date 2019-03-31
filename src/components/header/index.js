import React from 'react';
import {Row, Col} from 'antd';
import Util from '../../utils';
import Axios from '../../axios';

import './index.less';
export default class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            time: ''
        }
    }
    componentDidMount () {
        this.setState({
            userName: '小雨江南'
        })
        this.timer = setInterval(() => {
            let systemTime = Util.formattingTime(new Date().getTime());
            this.setState({
                time: systemTime
            })
        }, 1000);
        this.getWeatherInfo();
    }
    componentWillUnmount () {
        clearInterval(this.timer)
    }
    // 获取天气的信息
    getWeatherInfo () {
        let city = '上海';
        Axios.jsonp({
            url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        }).then(res => {
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0];
                let flag = new Date().getHours();
                this.setState({
                    imgurl: parseFloat(flag) < 18 ? data.dayPictureUrl : data.nightPictureUrl,
                    weather: data.weather
                })
            }
        })
    }
    render () {
        return (
            <div className="header-content">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎, {this.state.userName}</span>
                        <a className="login-out" href="/#">退出</a>
                    </Col>
                </Row>
                <Row className="header-bottom">
                    <Col className="header-bottom-breadcrumb" span={4}>首页</Col>
                    <Col className="header-bottom-weather" span={20}>
                        <span>{this.state.time}</span>
                        <span className="weather-item">
                            <img src={this.state.imgurl} alt=""></img>
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}