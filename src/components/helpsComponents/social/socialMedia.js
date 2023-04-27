import React from 'react';
import '../helpsComponentsStyles.scss'
// FaLinkedinIn
import {BsLinkedin} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
import {LikeButton} from "../../helpsExports";
const SocialMedia = (props) => {
    return(
        <div className={'socialMedia'}>
            {/*<LikeButton/>*/}
            <a href="https://github.com/rawadobied" title={'github'} target={'_blank'} rel="noreferrer" >

                <AiFillGithub className={'h4'}/>
            </a>
            <a href="https://www.linkedin.com/in/rawad-obied-50b50b171/" title={'linkedin'} target={'_blank'} rel="noreferrer" >
                <AiFillLinkedin className={'h4'}/>
            </a>
            {/*<a href="https://www.youtube.com/watch?v=G-Cr00UYokU" target={'_blank'} rel="noreferrer" ><BsTwitter/></a>*/}
        </div>
    )
};

export default SocialMedia;
