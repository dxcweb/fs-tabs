/**
 * Created by guowei on 17/3/21.
 */
import React, {Component, PropTypes} from 'react';
import TabBar from './TabBar/index'
import TabContent from './TabContent/index'
import TabPane from './TabPane'
class Tabs extends Component {
    state = {
        activeKey: null
    };

    setActiveKey(activeKey) {
        this.setState({activeKey});
    }

    render() {
        //extraContent,tabBar与Content组成
        return <div>
            <TabBar {...this.props} {...this.state} setActiveKey={this.setActiveKey.bind(this)}/>
            <TabContent {...this.props} {...this.state}/>
        </div>
    }
}
Tabs.TabPane = TabPane;

export default Tabs;