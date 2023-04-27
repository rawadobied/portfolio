import './style.scss'
import {MyTextField, MyTextarea, Modal} from "../../dashbordExports";
import {GetFromContext} from '../../../globalContext/helperFunction'
import React, {useEffect, useRef, useState} from "react";


const InfoForm = (props) => {
    const {
        name,
        setNameContext,
        subtitle,
        aboutMe,
        setLoader,
        aboutMeWorking,
        setAboutMeWorking,
        setAboutMeToStorage
    } = GetFromContext()
    const [info, setInfo] = useState(null)
    // const [jobExperience, setJobExperience] = useState([{title: 'Servers', years: '3+'}, {title: 'Kali', years: '3+'}])

    const [disabled, setDisabled] = useState(true)
    const [refresh, setRefresh] = useState(0)
    const formData = useRef()

    const pushInfo = (val, text) => {
        setInfo({...info, [text]: val}
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setDisabled(true)
        setLoader(true)
        // file && imageUpload(file)
        setTimeout(() => {
            formData.current.reset()
            setDisabled(false)
            setLoader(false)
        }, 2000)
        if (info != null) {
            setNameContext(info)
            setAboutMeToStorage(aboutMeWorking)
        }

        // setDisabled(false)
    }


    const handleJobChange = e => {
        let items = [...aboutMeWorking]
        let item = items[e.target.id]
        item[e.target.name] = e.target.value
        items[e.target.id] = item
        setAboutMeWorking(items)

    }

    const handleDelete = itemIndex => {
        let arr = aboutMeWorking
        arr.splice(itemIndex, 1)
        setAboutMeWorking(arr)
        setRefresh(refresh + 1)
    }
    useEffect(() => {

    }, [refresh, disabled])
    return (
        <div className={'infoFormWrapper position-relative'}>
            <div className={'infoFormContainer'}>

                <h2>Update Home Page Information</h2>
                <div>
                    <form className={'infoFormItems'} onSubmit={(e) => handleSubmit(e)} ref={formData}>
                        <div className="infoFormItem">
                            <MyTextField label={'Name'} placeholder={name} focused
                                         default={name}
                                         onChange={(event) => pushInfo(event.target.value, 'name')}
                                         inputProps={{maxLength: 20}} required />
                        </div>
                        <div className="infoFormItem">
                            <MyTextField label={'subTitle'} placeholder={subtitle}
                                         default={subtitle}
                                         focused
                                         onChange={(event) => pushInfo(event.target.value, 'subTitle')}
                                         inputProps={{maxLength: 20}} required/>
                        </div>
                        <div className="infoFormItem">
                            {/*<MyTextField id={'file'} label={'Image'}*/}
                            {/*             placeholder={'subtitle'} focused*/}
                            {/*             onChange={(e) => setFile(e)}*/}
                            {/*             type={'file'} inputProps={{accept: "image/png"}} inputRef={fileInputRef}*/}

                            {/*/>*/}
                        </div>
                        <div className={'infoFormContainer col-12'}>
                            <h2>Update About Me Page Information</h2>
                            <div className="infoFormItems">
                                <div className="infoFormItem" style={{width: '100%'}}>
                                    <MyTextarea label={'About me'} placeholder={aboutMe}
                                                style={{width: '100%'}}
                                                default={aboutMe}
                                                className={'p-3'}
                                                onChange={(event) => pushInfo(event.target.value, 'aboutme')}
                                    />
                                </div>
                                {aboutMeWorking && aboutMeWorking?.map((j, index) =>
                                    <div className="infoFormItem" key={index}>
                                        <MyTextField label={'Title'} placeholder={j.title}
                                                     variant="standard"
                                                     onChange={(e) => handleJobChange(e)}
                                                     id={index.toString()}
                                                     name={'title'}
                                                     required={j.title === 'blank' ? true : false}
                                                     focused
                                        />
                                        <MyTextField label={'Subtitle'} placeholder={j.subtitle}
                                                     variant="standard" name={'subtitle'}
                                                     id={index.toString()}
                                                     onChange={(e) => handleJobChange(e)}
                                                     required={j.subtitle === 'blank' ? true : false}
                                                     focused
                                        />
                                        <span className={'delete'} onClick={() => handleDelete(index)}>x</span>
                                    </div>
                                )}
                                <br/>
                                <div className={'actionButton'}>
                                    <button className={'btn btn-primary'}
                                            type={'button'}
                                            onClick={() => {
                                                if (aboutMeWorking.length > 6) return
                                                setAboutMeWorking([...aboutMeWorking, {
                                                    title: 'blank',
                                                    subtitle: 'blank'
                                                }])
                                            }
                                            }>+
                                    </button>
                                    <button type={'button'} className={'btn btn-primary'}
                                            onClick={() => handleDelete(aboutMeWorking.length - 1)}>-
                                    </button>
                                </div>
                            </div>
                            <div className={'col-12 d-flex align-items-center margin-t gap-2'}>
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" checked={!disabled} id="flexCheckDefault"
                                           onChange={() => setDisabled(!disabled)}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault"
                                    >
                                        I agree to <a href={"/terms"} className={'text-decoration-underline c-pointer'}>The Terms</a>
                                    </label>
                                </div>
                                <button disabled={disabled} className={'btn btn-primary'} onClick={(e) => {
                                    formData?.current.lastChild.click()
                                }}>Submit
                                </button>
                            </div>
                        </div>
                        <button style={{display: 'none'}} type={'submit'}>Clear Localstorage</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default InfoForm;
