/**
 * Created by guowei on 17/3/22.
 */
import React, {Component, PropTypes} from 'react';
import Block from 'fs-flex'
import {Text,TouchableOpacity} from 'react-native';

export default class TabBar extends Component {
    //渲染前调用一次，这个时候DOM结构还没有渲染。fv
    componentWillMount() {
        const {activeKey,setActiveKey,children}=this.props;
        if (activeKey == null) {
            let key = null;
            React.Children.forEach(children, (child)=> {
                if (!child) {
                    return;
                }
                if (!key) {
                    key = child.key;
                }
            });
            setActiveKey(key);
        }
    }

    onTabClick(key) {
        const {setActiveKey}=this.props;
        setActiveKey(key);
    }

    render() {
        const {children,activeKey}=this.props;
        const items = [];
        React.Children.forEach(children, (child)=> {
            if (!child) {
                return;
            }
            const key = child.key;
            let events = {};
            if (!child.props.disabled) {
                events = {
                    onPress: this.onTabClick.bind(this, key),
                };
            }
            let fc = "#799195";
            if (activeKey == key) {
                fc = '#1c2326';
            }
            items.push(<Block activeOpacity={1} el={TouchableOpacity}
                              vf f={1} h={45} a="c" j="c" {...events} key={key}>
                <Block el={Text} fs={15} mb={5} fc={fc}>{child.props.tab}</Block>
                {activeKey == key ?
                    <Block h={3} w={45} bc="#ff642b"
                           s={{borderWidth:1,borderColor:"#ff642b",borderRadius: 3}}/>
                    : <Block h={3}/>}
            </Block>);
        });
        return <Block hf>{items}</Block>
    }
}