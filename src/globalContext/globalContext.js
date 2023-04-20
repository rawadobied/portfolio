import React, {
    createContext, useEffect, useRef, useState
} from "react";
import data from '../assets/data.json'
import {
    _sendClick,
    _setAboutMeWorking,
    _setMyExperience,
    _setRate,
    _setVisitor,
    _setVisitorName
} from "./serverConfig/axiosApi";
import {setCookie, getCookie, getBrowserName, getClientInfo} from './helperFunction'


export const GlobalContext = createContext({})


export const MyGlobalContext = (props) => {
    const getItemFromStorage = (item) => {
        return localStorage.getItem(item)

    }
    const [name, setName] = useState(null)
    const [subtitle, setSubtitle] = useState(null)
    const [aboutMe, setAboutMe] = useState(null)
    const [aboutMeWorking, setAboutMeWorking] = useState(null)
    const [myExperience, setMyExperience] = useState(null)
    const [previousJobs, SetPreviousJobs] = useState(null)
    const [loader, setLoader] = useState(false)
    const [rateContext, setRateContext] = useState(null)
    const [cookies, setCookiesAccept] = useState(true)
    const [visibleComponents, setContextVisibleComponents] = useState(data.visibleComponents)
    // const [showWorkExperience, setShowWorkExperience] = useState(false)
    const [refresh, setRefresh] = useState(1)
    const [browser, setBrowser] = useState(null)
    const mounted = useRef(true) // render one time

    useEffect(() => {
        let info = JSON.parse(getItemFromStorage('name')) || null
        let aboutMe = JSON.parse(getItemFromStorage('aboutmeworking')) || null
        let myexperience = JSON.parse(getItemFromStorage('myexperience')) || null
        let mypreviousJobs = JSON.parse(getItemFromStorage('previousJobs')) || null
        let myrate = JSON.parse(getItemFromStorage('rate')) || null
        let cookiesAccepted = getCookie('ca') || null
        setName((info === null || typeof info.name === "undefined") ? data.name : info.name)
        setSubtitle((info === null || typeof info.subTitle === "undefined") ? data.subtitle : info.subTitle)
        setAboutMe((info === null || typeof info.aboutme === "undefined") ? data.aboutMeSection[0]?.aboutme : info.aboutme)
        setAboutMeWorking(aboutMe === null ? data.aboutMeSection[0]?.prevExpe : aboutMe)
        setMyExperience((myexperience === null) ? data.myExperienceSection : myexperience)
        SetPreviousJobs((mypreviousJobs === null) ? data.previousJobsSection : mypreviousJobs)
        setRateContext(myrate === null ? null : myrate)
        setCookiesAccept(cookiesAccepted)
    }, [refresh])
    useEffect(() => {
        const x = () => {
            mounted.current = false
        }

        if (mounted.current) {
            setBrowser(e => getBrowserName())
            // const browserFingerPrint = window.cookie
            // document.cookie = '<cookieName>=; Max-Age=0;secure'
            async function fetchData() {
                let fingerPrint = await getCookie('_cookie_accepted') // get finger Print from cookie
                if (fingerPrint !== '') {
                    //cookie exist
                } else {
                    let d = window.navigator
                    const id = (d.userAgent + d.vendor + d.appVersion + d.hardwareConcurrency + d.platform + d.userAgent).replace(/\D+/g, '')
                    //cookie not exist
                    _setVisitor(id, await getClientInfo()).then(res => {
                        setCookie('_cookie_accepted', true)
                    }).catch(e => console.log('this', e))
                }

            }

            fetchData()

        }


        return () => x()

    }, [])

    const setVisibleComponents = async (e) => {
        let d = await localStorage.getItem('visible_components') || null
        if (d == null) {
            let f = []
            f.push(e)
            localStorage.setItem('visible_components', JSON.stringify(f))
        } else {
            let f = await JSON.parse(d)
            let exist = f?.findIndex(x => x.id == e.id)
            if (exist >= 0) {
                let updated = {...f[exist], status: !f[exist].status}
                f.splice(exist, 1, updated)
                localStorage.setItem('visible_components', JSON.stringify(f))
            } else {
                f.push(e)
                localStorage.setItem('visible_components', JSON.stringify(f))
            }
        }


    }

    const setNameContext = (v) => {
        localStorage.setItem('name', JSON.stringify(v))
        setName(v.rawad)
        _setVisitorName(v).then(res => {
            return
        }).catch(e => {
            return
        })
    }
    const setRateToContext = async (v) => {
        setLoader(true)
        setRateContext(v)
        _sendClick({type: 'rate'})
        let formData = new FormData();
        formData.append('name', v?.name || 'anonymous')
        formData.append('rate', v?.rate || '1')
        formData.append('comment', v?.comment || '')
        _setRate(formData).then(async res => {
            try {
                let n = await Object.assign(v, {id: res.data?.id})
                localStorage.setItem('rate', JSON.stringify(n))
                setLoader(false)
            } catch (e) {
                setLoader(false)
            }
        }).catch(e => {
            setLoader(false)
            return
        })
    }
    const setAboutMeToStorage = (v) => {
        setMyExperience(v)
        localStorage.setItem('aboutmeworking', JSON.stringify(v))
        _setAboutMeWorking(v).then(r => {
            return
        }).catch(e => {
            return
        })
    }
    const setMyExperienceToStorage = (v) => {
        localStorage.setItem('myexperience', JSON.stringify(v))
        _setMyExperience(v).then(r => {
            return
        }).catch(e => {
            return
        })
    }


    return (
        <GlobalContext.Provider value={{
            name, subtitle,
            aboutMe, aboutMeWorking, myExperience, setAboutMeWorking,
            setNameContext, loader, setLoader, setMyExperience, previousJobs, rateContext,
            setAboutMeToStorage,
            setMyExperienceToStorage,
            setRateToContext,
            setRefresh,
            refresh,
            setCookiesAccept,
            cookies,
            browser,
            setVisibleComponents,
            visibleComponents
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
