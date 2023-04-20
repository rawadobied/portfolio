import React, {useEffect, useRef, useState} from 'react';
import './style.scss'
import {Rating} from "../helpsExports";
import {MyTextField} from "../../dashboard/dashbordExports";
import {GetFromContext} from "../../globalContext/helperFunction";
import {_sendClick} from "../../globalContext/serverConfig/axiosApi";

const RatingComponent = (props) => {
    const [rateDetails, setRateDetails] = useState({name: '', comment: '', rate: ''})
    const {rateContext, setRateToContext} = GetFromContext()
    const rateForm = useRef()
    const onRate = e => {
        setRateDetails({...rateDetails, rate: e})
    }
    const handleChange = e => {
        setRateDetails({...rateDetails, [e.target.name]: e.target.value})
    }

    useEffect(() => {

    }, [rateContext])
    return (
        <div className={'ratingComponentContainer experienceWrapper'}>
            <div className="ratingComponentWrapper">
                <small>Your name</small>
                <form ref={rateForm}>
                    <MyTextField
                        name={'name'}
                        placeholder={rateContext?.name === '' ? 'anonymous' : rateContext?.name || 'Not required'}
                        onChange={(e) => handleChange(e)}
                        inputProps={{maxLength: 20}}
                    />
                    <small>Rate my work</small>
                    <Rating onRate={onRate} value={rateContext?.rate} rate={rateContext?.rate}/>
                    <small>Leave comment</small>
                    <MyTextField inputProps={{maxLength: 40}} name={'comment'}
                                 placeholder={rateContext?.comment || 'comment'} onChange={(e) => handleChange(e)}/>
                </form>
            </div>

            <button className={'btn btn-primary'} onClick={() => {
                (!rateContext & !rateDetails.comment == '') && setRateToContext(rateDetails)
                rateForm?.current.reset()
            }
            } disabled={rateContext ? true : false}> {rateContext ? 'Thank you for rating' : 'submit'}</button>
        </div>
    )
};
// (!rateContext || setRateDetails) &&
export default RatingComponent;
