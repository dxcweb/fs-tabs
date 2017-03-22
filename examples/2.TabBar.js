/**
 * Created by guowei on 17/3/21.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {ScrollableTabBar} from 'fs-tabs'
class TabBar extends Component {
    render() {
        return <div>
            <ScrollableTabBar />
        </div>
    }
}

ReactDOM.render(<TabBar />, document.getElementById('__react-content'));