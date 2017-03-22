/**
 * Created by guowei on 17/3/22.
 */
import React, {Component, PropTypes} from 'react';
import TabBar from './TabBar/index'
import TabContent from './TabContent/index'
import TabPane from './TabPane'
import Block from 'fs-flex'
class Tabs extends Component {
    state = {
        activeKey: null
    };

    setActiveKey(activeKey) {
        this.setState({activeKey});
    }

    render() {
        //extraContent,tabBar与Content组成
        //
        return <Block>
            <TabBar {...this.props} {...this.state} setActiveKey={this.setActiveKey.bind(this)}/>
            <TabContent {...this.props} {...this.state}/>
        </Block>
    }
}
Tabs.TabPane = TabPane;

export default Tabs;