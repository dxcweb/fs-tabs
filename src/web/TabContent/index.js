/**
 * Created by guowei on 17/3/22.
 */
import React, {Component, PropTypes} from 'react';
export default class TabContent extends Component {
    toArray() {
        const arr = [];
        React.Children.forEach(children, child => {
            if (child) {
                arr.push(child);
            }
        });
        return arr;
    }

    render() {
        const {children,activeKey}=this.props;
        let active = null;
        React.Children.forEach(children, child => {
            if (child && child.key == activeKey) {
                active = child;
            }
        });
        return active;
    }
}