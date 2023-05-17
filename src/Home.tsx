import React, {useEffect, useState} from 'react';
import type {MenuProps} from 'antd';
import "./global.css"
import {Layout, Menu, theme, Empty, Row, Image, Col} from 'antd';
import i from "./static/img.png"
import right from "./static/right.png"
import foot from "./static/foot.png"
import sousuo from "./static/sousuo.png"
import home from "./static/zhuye.png"
import info from "./static/info.png"
import foooot from "./static/foooooooot.png"

const {Header, Content, Footer, Sider} = Layout;

const items1: MenuProps['items'] = ['About', 'Shopping', 'Inspiration', 'Author say'].map((key) => ({
    key,
    label: `${key}`,
}));

const Home: React.FC<{}> = React.memo(() => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const [image, setImage] = useState(i);

    return (
        <div className={"outer"}>
            <div className={"header"}>
                <div style={{
                    paddingLeft: 120,
                    paddingTop: 12,
                    width: 39,
                    height: 39
                }} className={"header-item"}><img src={home} alt=""/></div>
                <div style={{
                    paddingLeft: 329,
                    paddingTop: 7
                }}
                     className={"header-item"}>About
                </div>
                <div style={{
                    paddingLeft: 602,
                    paddingTop: 7
                }} className={"header-item"}>Shopping
                </div>
                <div style={{
                    paddingLeft: 937,
                    paddingTop: 7
                }} className={"header-item"}>Inspiration
                </div>
                <div style={{
                    paddingLeft: 1290,
                    paddingTop: 7,
                    width: 185
                }} className={"header-item"}>Auther say
                </div>
                <div style={{
                    paddingLeft: 1643,
                    paddingTop: 10,
                    width: 39,
                    height: 39
                }} className={"header-item"}><img src={sousuo} alt=""/></div>
            </div>
            <div className={"content"}>
                <div className={"side-left"}>
                    <div className={"left-image-container"}>
                        <img className={"left-image"} src={image} alt=""/>
                    </div>
                    <div className={"left-image-container"}>
                        <img className={"left-image"} src={image} alt=""/>
                    </div>
                    <div className={"left-image-container"}>
                        <img className={"left-image"} src={image} alt=""/>
                    </div>
                    <div className={"left-image-container"}>
                        <img className={"left-image"} src={image} alt=""/>
                    </div>
                </div>
                <div className={"inside-content"}>
                    <div className={"inside-content-top"}>
                        <div className={"inside-content-top-up"}>
                            <div className={"inside-content-top-left"}>1</div>
                            <div className={"inside-content-top-right"}>
                                <img src={info} alt=""/>
                            </div>
                        </div>
                        <div className={"inside-content-top-down"}>
                            <img src={foot} alt=""/>
                        </div>
                    </div>
                    <div className={"inside-content-bottom"}>
                        <Image
                            src={foooot}
                        />
                    </div>
                </div>
                <div className={"side-right"}>
                    <img src={right}/>
                </div>
            </div>
        </div>
    )
});

export default Home;
