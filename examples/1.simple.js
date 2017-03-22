/**
 * Created by guowei on 17/3/21.
 */
import './hd'
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
//import Tabs from 'fs-tabs'
import Tabs,{TabPane} from 'fs-tabs'
class Simple extends Component {
    render() {
        return <div>
            <Tabs>
                <Tabs.TabPane key="11" tab="项目详情1">
                    <div>1111</div>
                </Tabs.TabPane>
                <Tabs.TabPane key="22" tab="项目详情2">
                    <div>222</div>
                </Tabs.TabPane>
                <Tabs.TabPane key="33" tab="项目详情3">
                    <div>333</div>
                </Tabs.TabPane>
                <TabPane key="44" tab="项目详情4">
                    <div>4444</div>
                </TabPane>

            </Tabs>
        </div>
    }
}

ReactDOM.render(<Simple />, document.getElementById('__react-content'));