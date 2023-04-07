import React from 'react';
import {AiFillDislike,AiFillLike} from 'react-icons/ai'

const LikeButton = (props) => {
    return (

        <div className={'row d-flex flex-column c-pointer'}>
            <div className={'col-6'}><AiFillLike/></div>
            <div className={'col-6'}><AiFillDislike/></div>
        </div>
    )
};

export default LikeButton;
