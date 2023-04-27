import React, {useEffect, useRef, useState} from 'react';
import {LazyLoad} from "../../../components/helpsExports";
import {urlGet} from "../../../globalContext/helperFunction";
import {MdOutlineCameraEnhance} from "react-icons/md";
import {MyTextField} from "../myTextField/myTextField";

const ProfileImg = (props) => {
    const fileInputRef = useRef()
    const [file, setFile] = useState(null)
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }
    const imageUpload = (e) => {
        const file = e.target.files[0];
        if (["image/png"].includes(file?.type)) {
            getBase64(file).then(base64 => {
                localStorage["fileBase64"] = base64;
                setFile(file)
            });

        } else {
            fileInputRef.current.value = null
            alert('png images only')

        }
    };

    useEffect(()=>{

    },[file])

    return (
        <>
            <div className={'visually-hidden'}>
                <MyTextField id={'file'} label={'Image'}
                             placeholder={'subtitle'} focused
                             onChange={(e) => imageUpload(e)}
                             type={'file'} inputProps={{accept: "image/png"}}
                             inputRef={fileInputRef}

                />
            </div>
            <div className={'imgContainer'}>
                <LazyLoad src={urlGet() || 'rawad.png'} file={urlGet() ? true : false} alt={'Rawad\'s image'}/>

                {/*<img src={urlGet() || Me} alt="Me"/>*/}
                <span className={'camera c-pointer'} onClick={() => fileInputRef.current.click()}>
                    <MdOutlineCameraEnhance/>
                </span>
            </div>

        </>
    )
};

export default ProfileImg;
