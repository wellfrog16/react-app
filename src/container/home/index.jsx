import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import XMenu from '../../components/common/XMenu';
import CCC from '../../components/home/content';
import menus from './menu';
import style from './index.module.scss';

const { Header, Sider, Content } = Layout;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed,
        });
    }

    render() {
        const { collapsed } = this.state;
        return (
            <Layout className={style.layout}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    className={style.sider}
                    width={250}
                >
                    <div className={style.logo} />
                    <XMenu data={menus} />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={style.trigger}
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <div className={style.wrapper}>
                        <Content className={style.content}>
                            <CCC />
                        </Content>
                    </div>
                </Layout>
            </Layout>
        );
    }
}

export default Index;
