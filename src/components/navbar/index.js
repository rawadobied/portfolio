import React, {useEffect, useRef, useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/js/dist/collapse"
import './style.scss'
import {AiOutlineHome, AiOutlineUser,} from 'react-icons/ai'
import {BiCopyAlt} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {_sendClick} from "../../globalContext/serverConfig/axiosApi";

const Navbar = (props) => {
        const [activeNave, setActiveNav] = useState('home')
        const [showMsg, setShowMsg] = useState('none')
        const navRef = useRef()
        // useEffect(()=>{
        //     console.log(activeNave)
        // },[activeNave])
        useEffect(() => {
            const sections = document.querySelectorAll('section[data-section]')
            window.addEventListener('scroll', function () {
                let current = ''
                sections?.forEach(s => {
                    const sTop = s.offsetTop;
                    const sHeight = s.clientHeight
                    if (window.pageYOffset >= sTop) {
                        current = s.getAttribute('id')
                    }
                })
                setActiveNav(current)
            })
        }, [])
        useEffect(() => {

        }, [activeNave])
    function _showMsg(){
            setShowMsg('block')
        setTimeout(()=>{
            setShowMsg('none')
        },2000)
    }

        return (
            <nav className="" ref={navRef}>
                <a title={'Home'} href="#home" name={'home'} className={activeNave === 'home' ? 'active' : ''}
                   onClick={(event) => {
                       _sendClick({type:'home'})
                   }}><AiOutlineHome/></a>
                <a title={'About'} name={'about'} href="#about"
                   onClick={()=> _sendClick({type:'About'})}
                   className={activeNave === 'about' ? 'active' : ''}>
                    <AiOutlineUser/></a>
                <a title={'Experience'} name={'experience'} href="#experience"
                   className={activeNave === 'experience' ? 'active' : ''}
                   onClick={()=> _sendClick({type:'Experience'})}
                ><BiBook/></a>
                <a title={'Contacts'} name={'contacts'} href="#contacts"
                   className={activeNave === 'contacts' ? 'active' : ''}
                   onClick={()=> _sendClick({type:'contacts'})}
                ><RiServiceFill/></a>
                <a title={'Share URL'} name={'contacts'}
                   className={'c-pointer'}
                   onClick={()=> {
                       navigator.clipboard.writeText('https://www.rawad.net')
                       _showMsg()
                   }}
                ><BiCopyAlt/>
                    <span
                        style={{marginLeft:'-2rem',display:showMsg}}
                        className={'position-absolute top-0 text-gray w-50'}>URL Copied</span>
                </a>

            </nav>
        )
    }

;

export default Navbar;
