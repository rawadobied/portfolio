import React from "react";
import {TextField, TextareaAutosize} from "@mui/material";


export const MyTextField = (props) => {
    return (
            <TextField       label={props.label}
                             placeholder={props.placeholder || `Enter  ${props.label}`}
                             className={props.className || 'textField'}
                             InputProps={{
                                 className: props.className || 'textField'
                             }}
                             {...props}



        />

    )


};
export const MyTextarea = (props) => {
    return (
        <TextareaAutosize label={props.label}
                          placeholder={props.placeholder || `Enter  ${props.label}`}
            // className={'textField'}
            //                      ref={props?.ref}
                          minRows={3}
                          // minLength={500}
                          {...props}
            // focused


        />

    )


};

