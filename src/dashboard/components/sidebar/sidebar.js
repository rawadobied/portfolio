import './style.scss'
import {MdOutlineSegment} from 'react-icons/md'
import {MdUpdate, MdHome, MdOutlineSettings} from 'react-icons/md'

import {NavLink} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {GetFromContext, urlGet} from "../../../globalContext/helperFunction";
import {LazyLoad} from "../../../components/helpsExports";

const Sidebar = (props) => {
    const {
        name
    } = GetFromContext()
    const [active, setActive] = useState(null)
    const sideBarRef = useRef()
    const {onCollapse, onref} = props

    function updateSize() {
        if (window.innerWidth < 850) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    useEffect(() => {
        updateSize()
        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize)
    }, [])
    useEffect(()=>{
        onCollapse(active)
        onref(sideBarRef)
    },[active])

    return (
        <section className={`navbarContainer ${active ? '' : 'open'}`} ref={sideBarRef}>
            <h3>{name + "'s" || 'Rawad\'s'}</h3>
            <div className={'imgContainer'}>
                <LazyLoad src={urlGet() || 'me-about.jpg'} file={urlGet() ? true : false} alt={'Rawad\'s image'}/>
                {/*<img src={urlGet() || Me} alt="Me"/>*/}
            </div>
            <h2>Dashboard</h2>
            <div className="menuToggle">
                <MdOutlineSegment onClick={() => setActive(!active)}/>
            </div>
            <div className="listContainer">
                <ul className={'navList'}>
                    <li className={'navItem'}>
                        <NavLink className={'navLink d-flex'} to={'/dashboard/home'}>
                            <div className={'col-6'}>
                                <h3><MdHome/></h3>
                            </div>
                            <div className={'col-6 text-start'}>
                                <h4>Home</h4>
                            </div>
                        </NavLink>
                    </li>
                    <li className={'navItem'}>
                        <NavLink className={'navLink d-flex'} to={'/dashboard/update'}>
                            <div className={'col-6'}>
                                <h3><MdUpdate/></h3>
                            </div>
                            <div className={'col-6 text-start'}>
                                <h4>Portfolio</h4>
                            </div>
                        </NavLink>
                    </li>
                    <li className={'navItem'}>
                        <NavLink className={'navLink d-flex'} to={'/dashboard/setting'}>
                            <div className={'col-6'}>
                                <h3><MdOutlineSettings/></h3>
                            </div>
                            <div className={'col-6 text-start'}>
                                <h4>settings</h4>
                            </div>
                        </NavLink>
                    </li>
                </ul>

            </div>

        </section>
    )
};

export default Sidebar;
