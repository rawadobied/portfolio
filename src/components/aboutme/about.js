import './style.scss'
import {Card} from "../helpsExports";
import {GetFromContext} from "../../globalContext/helperFunction";
import {useEffect, useRef} from "react";
import l from '../../assets/programming.svg'
const About = (props) => {
    const scrollSideBar = useRef()
    const {aboutMe, aboutMeWorking} = GetFromContext()
    useEffect(() => {
    }, [aboutMe, aboutMeWorking])

    useEffect(() => {
        let pressed = false
        let startX = 0
        let scrollLeftStart = 0
        scrollSideBar?.current.addEventListener('mousedown', function (e) {
            document.body.style.cursor='grabbing'
            pressed = true
            startX = e.clientX - scrollSideBar?.current.offsetLeft
            scrollLeftStart = scrollSideBar?.current.scrollLeft
        })
        scrollSideBar?.current.addEventListener('mouseleave', function (e) {
            pressed = false
            document.body.style.cursor='unset'
        })
        window.addEventListener('mouseup', function (e) {
            document.body.style.cursor='unset'
            pressed = false
        })
        scrollSideBar?.current.addEventListener('mousemove', function (e) {
            e.preventDefault()
            if (!pressed) {
                return
            } else {
                const x = e.pageX - scrollSideBar?.current.offsetLeft
                const walk = (x - startX) * 2
                scrollSideBar.current.scrollLeft = scrollLeftStart - walk
            }
        })

    }, [])
    return (
        <section id={'about'} data-section={'experience'}>
            <h5 className={'secondary-text-color'}>Get To Know</h5>
            <h2 className={'main-text-color'}>About Me</h2>
            <div className={'container-xxl d-flex flex-wrap align-items-center'}>
                <div className={'col-12 col-md-5'} style={{minWidth:'200px'}}>
                        {/*<LazyLoad src={urlGet()[0] ||  'me-about.jpg'} file={urlGet()[1]}/>*/}
                        <img src={l} alt="" className={'img-fluid w-100'}/>
                        {/*<video src={l} muted autoPlay con/>*/}
                </div>
                <div className="aboutContent col-12 col-md-7">
                    <h2 className={'main-text-color typing-animation position-relative overflow-hidden'}>I would like to join your team!</h2>
                    <p className={'secondary-text-color'}>
                        {aboutMe &&  Array.from(aboutMe?.split('\n').map(
                            (s,index)=><span className={'m-2 d-block'} key={index}>{s}</span>
                        ))}
                    </p>
                    <div className={'cardWrapper'} ref={scrollSideBar}>
                        {aboutMeWorking && aboutMeWorking.map((e, index) =>
                            <Card data={e} key={index}/>
                        )}

                    </div>
                </div>


            </div>
        </section>
    )
};

export default About;
