import './style.scss'
import ReCAPTCHA from "react-google-recaptcha";
import React, {useEffect, useRef, useState} from "react";
import {MyTextarea, MyTextField} from "../../../dashboard/dashbordExports";
import {_sendMessage, _getGoogleKey} from '../../../globalContext/serverConfig/axiosApi'
import {GetFromContext} from "../../../globalContext/helperFunction";


const Form = (props) => {
    const reCapForm = useRef()
    const {setLoader, browser} = GetFromContext()
    const [info, setInfo] = useState(null)
    const [isTrusted, setIsTrusted] = useState(false)
    const [message, setMessage] = useState('')
    const [googleKey, setGoogleKey] = useState('')

    function submit(e) {
        e.preventDefault()
        if (isTrusted) {
            setLoader(true)
            info != null && _sendMessage(info).then(res => {
                    setMessage(res.data.message)
                    console.log(res.data.message)
                    setIsTrusted(false)
                    setInfo(null)
                }
            ).catch(e => {
                setMessage(e.response.data.message)
                setIsTrusted(true)
                console.log(e)
            }).finally(() => {
                    setLoader(false)

                }
            )

        }
    }

    useEffect(() => {
        _getGoogleKey().then(res => {
            setGoogleKey(res.data)
        })
        if (browser && !browser?.includes('Chrome')) {
            setIsTrusted(true)

        }

    }, [browser])


    const pushInfo = (val, text) => {
        setInfo({...info, [text]: val}
        )
    }
    return (
        <div className={'formContainer'}>
            <form onSubmit={(e) => submit(e)} className={'contactForm'}>
                <MyTextField type="text" name={'name'} placeholder={'Full Name'} value={info?.name || ''}
                             required onChange={(e) => pushInfo(e.target.value, 'name')}/>
                <MyTextField type="Email" name={'email'} placeholder={'Email'} value={info?.email || ''}
                             required onChange={(e) => pushInfo(e.target.value, 'email')}/>
                <MyTextarea name={'message'} className={'p-3'}  placeholder={'Message'}
                            value={info?.message || ''}
                            required onChange={(e) => pushInfo(e.target.value, 'message')}/>
                {
                    browser?.includes('chrome') &&
                    message ?
                        <h4 className={message && message.toLowerCase().includes('successfully') ? `text-success` : ''}>{message}</h4> :
                        googleKey &&
                        <ReCAPTCHA sitekey={googleKey && googleKey || ''}
                                   onChange={() =>
                                       setIsTrusted(true)
                                   }/>

                }
                <button type={"submit"} className={'btn btn-primary'}
                        disabled={!isTrusted}
                        ref={reCapForm}>Send Message
                </button>
            </form>
        </div>
    )
};

export default Form;
