/**
 * Created by guowei on 17/3/22.
 */
import React, {Component, PropTypes} from 'react';
import Block from 'fs-flex'
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
                    onClick: this.onTabClick.bind(this, key),
                };
            }
            let fc = "#799195";
            if (activeKey == key) {
                fc = '#1c2326';
            }
            items.push(<Block vf f="1" h="0.9rem" a="c" j="c" {...events} key={key}>
                <Block fs="0.30rem" mb="0.1rem" fc={fc}>{child.props.tab}</Block>
                {activeKey == key ?
                    <Block h="0.06rem" w="0.9rem" bc="#ff642b"
                           s={{boxSizing: "border-box",borderRadius: "0.06rem"}}/>
                    : <Block h="0.06rem"/>}
            </Block>);
        });
        return <Block hf>{items}</Block>
    }
}