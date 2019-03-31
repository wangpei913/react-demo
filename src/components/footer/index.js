import React from 'react';
import './index.less';
export default class Footer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
            <div className="foot-content">Copyright © 2017 Facebook Inc.</div>
        )
    }
}