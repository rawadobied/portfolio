import './style.scss'
import {MyTextField} from "../../dashbordExports";
import {GetFromContext} from '../../../globalContext/helperFunction'
import {useEffect, useRef, useState} from "react";
import React from "react";


const ExpPortfolioForm = (props) => {
    const {
        myExperience,
        setLoader,
        setMyExperienceToStorage,
        setMyExperience
    } = GetFromContext()
    const [disabled, setDisabled] = useState(true)
    const [refresh, setRefresh] = useState(0)
    const expFormData = useRef()

    const pushInfo = (val) => {
        console.log(val.target.id)
        let items = [...myExperience]
        let item = items[val.target.id]
        item['name'] = val.target.value
        // items[pIndex]['data'][e.target.id] = item
        setMyExperience(items)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setDisabled(true)
        setLoader(true)
        setMyExperienceToStorage(myExperience)
        setTimeout(() => {
            expFormData?.current.reset()
            setDisabled(false)
            setLoader(false)
        }, 2000)
        // setDisabled(false)
    }

    const handleJobChange = (e, pIndex) => {
        let items = [...myExperience]
        let item = items[pIndex]['data'][e.target.id]
        item[e.target.name] = e.target.value
        items[pIndex]['data'][e.target.id] = item
        setMyExperience(items)
    }

    const handleDelete = (itemIndex, pIndex) => {
        let arr = myExperience
        arr[pIndex]['data'].splice(itemIndex, 1)
        setMyExperience(arr)
        setRefresh(refresh + 1)
    }
    useEffect(() => {
    }, [refresh])
    return (
        <div className={'infoFormWrapper'}>
            <div className={'infoFormContainer'}>
                <h2>Update My Experience</h2>
                <div>
                    <form className={'infoFormItems'} onSubmit={(e) => handleSubmit(e)} ref={expFormData}>
                        {myExperience && myExperience.map((v, pIndex) => {
                                return (
                                    <React.Fragment key={pIndex}>
                                        <div className="infoFormItem">
                                            <MyTextField label={'Section Title'} placeholder={v.name}
                                                         onChange={(event) => pushInfo(event)}
                                                         value={v.name}
                                                         inputProps={{maxLength: 20}} required id={pIndex?.toString()} focused/>
                                        </div>
                                        <div className="infoFormItems" key={pIndex}>
                                            {v?.data && v?.data?.map((i, index) => {
                                                return (
                                                    <div className="infoFormItem" key={index}>
                                                        <MyTextField label={'title'} placeholder={i.title}
                                                                     variant="standard"
                                                                     onChange={(e) => handleJobChange(e, pIndex)}
                                                                     id={index.toString()}
                                                                     name={'title'}
                                                                     focused
                                                            // required={j.title === 'blank' ? true : false}
                                                        />
                                                        <MyTextField label={'level'} placeholder={i.level}
                                                                     variant="standard" name={'level'}
                                                                     id={index.toString()}
                                                                     onChange={(e) => handleJobChange(e, pIndex)}
                                                                     type={'text'}
                                                                     // inputProps={{
                                                                     //     min: 0,
                                                                     //     max: 100,
                                                                     //     pattern: '[0-9]',
                                                                     //     maxLength: 2
                                                                     // }}
                                                                     focused
                                                            // required={j.subtitle === 'blank' ? true : false}
                                                        />
                                                        <span className={'delete'}
                                                              onClick={() => handleDelete(index, pIndex)}>x</span>
                                                    </div>

                                                )
                                            })}
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        )}

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
                                expFormData?.current.lastChild.click()
                            }}>Submit
                            </button>
                        </div>
                        {/*<button disabled={disabled} className={'btn btn-primary margin-t'} onClick={(e) => {*/}
                        {/*    expFormData?.current.lastChild.click()*/}
                        {/*}}>Submit*/}
                        {/*</button>*/}
                        <button style={{display: 'none'}} type={'submit'}>Clear Localstorage</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ExpPortfolioForm;
