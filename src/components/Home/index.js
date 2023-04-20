import React, {useEffect} from 'react';
import './style.scss'
import {Cta, SocialMedia, LazyLoad} from '../helpsExports'

import {GetFromContext, urlGet} from "../../globalContext/helperFunction";
import {_sendClick} from "../../globalContext/serverConfig/axiosApi";


const Home = (props) => {
        const {name, subtitle} = GetFromContext()


        useEffect(() => {

        }, [name, subtitle])


        return (
            <>
                <section id={'home'} className={'home-container container'} data-section={'home'}>
                    <h5>Hello I'm</h5>
                    <h1 className={'capitalize'}>{name}</h1>
                    <h5>{subtitle}</h5>
                    <Cta/>
                    <div className="me">
                        <LazyLoad className={'rotate'} src={urlGet() || 'mee.png'} file={urlGet() ? true : false}
                                  alt={'rawad obied image'}/>
                    </div>


                    <div className="socialMedia-wrapper">
                        <SocialMedia/>
                    </div>
                    <div className="checkLocation-wrapper" onClick={() => _sendClick({type: 'dashboard'})}>
                        <a href="https://rawad.net/dashboard" target={'_blank'}>
                            <span className={'btn bg-info text-dark'}>You where me!</span>
                        </a>
                    </div>
                </section>
            </>
        )
    }

;

export default Home;
