import React, {useEffect, useState} from 'react';
import type {MenuProps} from 'antd';
import "./global.css"
import {Layout, Menu, theme, Empty, Row, Image, Col} from 'antd';
import i from "./static/img.png"

const {Header, Content, Footer, Sider} = Layout;

const items1: MenuProps['items'] = ['About', 'Shopping', 'Inspiration', 'Author say'].map((key) => ({
    key,
    label: `${key}`,
}));

const items2: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `${key}`,
}));

const Home: React.FC<{}> = React.memo(() => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const [image, setImage] = useState(i);

    return (
        <Layout>
            <Header className="header">
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}
                      items={items1}
                />
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Layout>
                    <Sider width={200}>
                        <Row>
                            <Row>
                                <Col push={6}>
                                    <Image
                                        preview={false}
                                        width={100}
                                        height={100}
                                        src={image}
                                        onClick={() => {
                                            console.log(11)
                                            setImage(i)
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col push={6}>
                                    <Image
                                        preview={false}
                                        width={100}
                                        height={100}
                                        src={image}
                                        onClick={() => {
                                            console.log(22)
                                            setImage(i)
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col push={6}>
                                    <Image
                                        preview={false}
                                        width={100}
                                        height={100}
                                        src={image}
                                        onClick={() => {
                                            console.log(33)
                                            setImage(i)
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col push={6}>
                                    <Image
                                        preview={false}
                                        width={100}
                                        height={100}
                                        src={image}
                                        onClick={() => {
                                            console.log(44)
                                            setImage(i)
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Row>
                    </Sider>
                    <Content>
                        <Row>
                            <Col className="content" span={18} push={3}>
                                <Row>
                                    <Col span={6}>
                                        1
                                    </Col>
                                    <Col span={18} pull={1}>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            2
                        </Row>
                    </Content>
                    <Sider>
                        1
                    </Sider>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}/>
        </Layout>
    );
});

export default Home;
