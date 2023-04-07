import {Sidebar} from '../dashbordExports'
import './style.scss'
import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
// import {Helmet} from "react-helmet-async";
import Seo from '../../seo'


const Home = (props) => {
    const [inActive, setInActive] = useState(true)
    const [width, setWidth] = useState(null)
    useEffect(() => {
    }, [inActive])
    return (
        <Seo>
            {/*<Helmet>*/}
            {/*    <meta property="og:site_name" content="Rawad Obied Portfolio"/>*/}
            {/*    <meta property="og:title" content="dashboard"/>*/}
            {/*    <meta property="og:image" itemprop="image" content="https://rawad.net/me.png"/>*/}
            {/*    <meta property="og:image:width" content="80"/>*/}
            {/*    <meta property="og:image:height" content="110"/>*/}
            {/*    <title>Rawad Dashboard</title>*/}
            {/*</Helmet>*/}
            <div className={'dashboardWrapper'}>
                <div className="sideBarWrapper">
                    <Sidebar onref={(r) => setWidth(r?.current?.clientWidth)} onCollapse={(inActive) => {
                        setInActive(inActive)
                    }}/>
                </div>
                <div className="appWrapper"
                     style={{marginLeft: inActive ? `+${width}px` : ``}}
                >
                    <div className="appContainer">
                        <Outlet/>
                    </div>
                </div>

            </div>
        </Seo>
    )
};

export default Home;
