import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';

class Index extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.any),
    }

    static defaultProps = {
        data: [],
    }

    renderMenuItem = ({ key, icon, title }) => (
        <Menu.Item key={key}>
            <Link to={key}>
                {icon && <Icon type={icon} />}
                <span>{title}</span>
            </Link>
        </Menu.Item>
    )

    renderSubMenu = ({
        key, icon, title, children,
    }) => (
        <Menu.SubMenu
            key={key}
            title={(
                <span>
                    {icon && <Icon type={icon} />}
                    <span>{title}</span>
                </span>
            )}
        >
            { children && children.map(item => (item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item))) }
        </Menu.SubMenu>
    )

    render() {
        const { data } = this.props;
        console.log('这里是XMenu组件的render');
        return (
            <Menu theme="dark" mode="inline">
                {
                    data && data.map(item => (item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)))
                }
            </Menu>
        );
    }
}

export default Index;
