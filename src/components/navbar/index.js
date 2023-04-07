import React, {useEffect, useRef, useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/js/dist/collapse"
import './style.scss'
import {AiOutlineHome, AiOutlineUser,} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'

const Navbar = (props) => {
        const [activeNave, setActiveNav] = useState('home')
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

        return (
            <nav className="" ref={navRef}>
                <a title={'Home'} href="#home" name={'home'} className={activeNave === 'home' ? 'active' : ''}
                   onClick={(event) => {
                       // setActiveNav(event.target.name)
                   }}><AiOutlineHome/></a>
                <a title={'About'} name={'about'} href="#about" className={activeNave === 'about' ? 'active' : ''}>
                    <AiOutlineUser/></a>
                <a title={'Experience'} name={'experience'} href="#experience"
                   className={activeNave === 'experience' ? 'active' : ''}
                ><BiBook/></a>
                <a title={'Contacts'} name={'contacts'} href="#contacts"
                   className={activeNave === 'contacts' ? 'active' : ''}
                ><RiServiceFill/></a>

            </nav>
        )
    }

;

export default Navbar;
