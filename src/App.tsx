import React, {useEffect, useState} from 'react';
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu, theme, Button, Empty} from 'antd';

const {Header, Content, Footer, Sider} = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `type ${key}`,
}));

const items2: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `type ${key}`,
}));

const App: React.FC<{}> = React.memo(() => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    // eslint-disable-next-line react/jsx-no-undef
    const [pic1, setPic1] = useState(<Empty/>);

    const headerClick = ({item, key, keyPath, domEvent}: { item: any, key: any, keyPath: any, domEvent: any }) => {
        setPic1(key)
    }
    const sideClick = (item: any) => {
        setPic1(item.key)
    }

    useEffect(() => {
        console.log(1111)
    }, [pic1])

    return (
        <Layout>
            <Content style={{backgroundColor: 'red'}}>
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1}
                              onClick={headerClick}/>
                    </Header>
                    <Content style={{padding: '0 50px'}}>
                        <Layout>
                            <Sider style={{background: colorBgContainer}} width={200}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{height: '100%'}}
                                    items={items2}
                                    onClick={sideClick}
                                />
                            </Sider>
                            <Content>
                                {pic1}
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}></Footer>
        </Layout>
    );
});

export default App;
