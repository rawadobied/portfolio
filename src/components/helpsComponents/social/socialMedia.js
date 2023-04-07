import React from 'react';
import '../helpsComponentsStyles.scss'
// FaLinkedinIn
import {BsLinkedin} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {LikeButton} from "../../helpsExports";
const SocialMedia = (props) => {
    return(
        <div className={'socialMedia'}>
            {/*<LikeButton/>*/}
            <a href="https://www.youtube.com/watch?v=G-Cr00UYokU" target={'_blank'} rel="noreferrer" ><BsLinkedin/></a>
            <a href="https://www.youtube.com/watch?v=G-Cr00UYokU" target={'_blank'} rel="noreferrer" ><BsFacebook/></a>
            <a href="https://www.youtube.com/watch?v=G-Cr00UYokU" target={'_blank'} rel="noreferrer" ><BsTwitter/></a>
        </div>
    )
};

export default SocialMedia;
