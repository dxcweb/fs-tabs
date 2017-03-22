/**
 * Created by guowei on 17/3/21.
 */

import React, {Component, PropTypes} from 'react';
export default class ScrollableTabBar extends Component {

    getInkBarNode() {
        const { prefixCls, styles, inkBarAnimated } = this.props;
        const className = `${prefixCls}-ink-bar`;
        const classes = classnames({
            [className]: true

        });
        return (
            <div
                key="inkBar"
                ref="inkBar"
            />
        );
    }

    getTabs() {
        const props = this.props;
        const children = props.panels;
        const activeKey = props.activeKey;
        const rst = [];
        const prefixCls = props.prefixCls;

        React.Children.forEach(children, (child) => {
            if (!child) {
                return;
            }
            const key = child.key;
            let cls = activeKey === key ? `${prefixCls}-tab-active` : '';
            cls += ` ${prefixCls}-tab`;
            let events = {};
            if (child.props.disabled) {
                cls += ` ${prefixCls}-tab-disabled`;
            } else {
                events = {
                    onClick: this.onTabClick.bind(this, key),
                };
            }
            const ref = {};
            if (activeKey === key) {
                ref.ref = 'activeTab';
            }
            rst.push(<div
                role="tab"
                aria-disabled={child.props.disabled ? 'true' : 'false'}
                aria-selected={activeKey === key ? 'true' : 'false'}
                {...events}
                className={cls}
                key={key}
                {...ref}
            >
                {child.props.tab}
            </div>);
        });

        return rst;
    }

    getScrollBarNode(content) {
        const { next, prev } = this.state;
        const { prefixCls, scrollAnimated } = this.props;
        let nextButton;
        let prevButton;
        const showNextPrev = prev || next;

        if (showNextPrev) {
            prevButton = (
                <span
                    onClick={prev ? this.prev : null}
                    unselectable="unselectable"
                    className={classnames({
            [`${prefixCls}-tab-prev`]: 1,
            [`${prefixCls}-tab-btn-disabled`]: !prev,
          })}
                >
          <span className={`${prefixCls}-tab-prev-icon`}/>
        </span>
            );

            nextButton = (
                <span
                    onClick={next ? this.next : null}
                    unselectable="unselectable"
                    className={classnames({
            [`${prefixCls}-tab-next`]: 1,
            [`${prefixCls}-tab-btn-disabled`]: !next,
          })}
                >
          <span className={`${prefixCls}-tab-next-icon`}/>
        </span>
            );
        }

        const navClassName = `${prefixCls}-nav`;
        const navClasses = classnames({
            [navClassName]: true,
            [
                scrollAnimated ?
                    `${navClassName}-animated` :
                    `${navClassName}-no-animated`
                ]: true,
        });

        return (
            <div
                className={classnames({
          [`${prefixCls}-nav-container`]: 1,
          [`${prefixCls}-nav-container-scrolling`]: showNextPrev,
        })}
                key="container"
                ref="container"
            >
                {prevButton}
                {nextButton}
                <div className={`${prefixCls}-nav-wrap`} ref="navWrap">
                    <div className={`${prefixCls}-nav-scroll`}>
                        <div className={navClasses} ref="nav">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getRootNode(contents) {
        const { prefixCls, onKeyDown, className, extraContent, style } = this.props;
        const cls = classnames({
            [`${prefixCls}-bar`]: 1,
            [className]: !!className,
        });
        return (
            <div
                role="tablist"
                className={cls}
                tabIndex="0"
                ref="root"
                onKeyDown={onKeyDown}
                style={style}
            >
                {extraContent ?
                    (<div
                        style={tabBarExtraContentStyle}
                        key="extra"
                    >
                        {extraContent}
                    </div>) : null}
                {contents}
            </div>);
    }

    render() {
        //const inkBarNode = this.getInkBarNode();
        //const tabs = this.getTabs();
        const scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
        //return this.getRootNode(scrollbarNode);
        return <div>123123</div>
    }
}