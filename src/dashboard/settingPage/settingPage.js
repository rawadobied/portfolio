import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {SwitchButtons} from "../dashbordExports";
import {GetFromContext} from "../../globalContext/helperFunction";

const SettingPage = (props) => {
    const navi = useNavigate()
    const {setLoader, setRefresh, refresh} = GetFromContext()
    const data = [
        {
            label: 'Home',
            id: '1',
            status: true
        },
        {
            label: 'Expierence',
            id: '2',
            status: true
        },
        {
            label: 'About Me',
            id: '3',
            status: false
        },
        {
            label: 'Contact Me',
            id: '4',
            status: true
        },

    ]

    function clearStorage() {
        setLoader(true)
        localStorage.clear()
        setRefresh(refresh => refresh + 1)
        setTimeout(() => {
            setLoader(false)

            navi('/')
        }, [5000])
    }

    useEffect(() => {

    }, [])

    return (
        <div className={'w-100 d-flex flex-column gap-3'}>
            <div>
                <h1>Update Settings</h1>
            </div>
            <div className={'d-flex flex-column gap-4'}>
                <h4>Check Buttons</h4>
                <div className={'d-flex flex-wrap gap-1'}>
                    <div className={'col-md-9 col-sm-12'}><SwitchButtons data={data}/></div>
                </div>
            </div>
            <div>
            </div>
            <div className={'col-4'}>
                <label htmlFor={'resetBtn'}>this will reset all updates you have made!</label>
                <button id={'resetBtn'} onClick={clearStorage} className={'btn'}>Reset Factory</button>
            </div>


        </div>
    )
};

export default SettingPage;
