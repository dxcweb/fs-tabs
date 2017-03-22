/**
 * Created by guowei on 17/3/22.
 */
import React, {Component, PropTypes} from 'react';
import Block from 'fs-flex'

export default class TabPane extends Component {
    render() {
        const {tab,...other}=this.props;
        return <Block {...other} />
    }
}