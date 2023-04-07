import React, {useEffect} from 'react';
import './style.scss'
import {Cta, SocialMedia, LazyLoad} from '../helpsExports'

import {GetFromContext, urlGet} from "../../globalContext/helperFunction";


const Home = (props) => {
    const {name, subtitle} = GetFromContext()


    useEffect(() => {

    }, [name, subtitle])


    return (
        <>
        <section id={'home'} className={'home-container container'} data-section={'home'}>
            <h5>Hello I'm</h5>
            <h1 className={'capitalize'}>{name}</h1>
            <h5 className={"text-light"}>{subtitle}</h5>
            <Cta/>
            <div className="me">
                <LazyLoad className={'rotate'} src={urlGet() || 'mee.png'} file={urlGet() ? true : false}
                          alt={'rawad obied image'}/>
            </div>


            <div className="socialMedia-wrapper">
                <SocialMedia/>
            </div>
            <div className="checkLocation-wrapper">
                <a href="/dashboard" target={'_blank'}>
                    <span className={'btn bg-info text-dark'}>You where me!</span>
                </a>
            </div>
        </section>
        </>
)
}

;

export default Home;
