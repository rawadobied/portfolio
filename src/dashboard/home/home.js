import {Sidebar} from '../dashbordExports'
import './style.scss'
import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {Helmet} from "react-helmet";
import Seo from '../../seo'


const Home = (props) => {
    const [inActive, setInActive] = useState(true)
    const [width, setWidth] = useState(null)
    useEffect(() => {
    }, [inActive])
    return (
        <Seo>
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
                        <a href="https://rawad.net" className={'m-auto d-block text-center'}>back to portfolio</a>
                    </div>
                </div>

            </div>
        </Seo>
    )
};

export default Home;
