import React from 'react';
import {GetFromContext} from "../../../globalContext/helperFunction";

const SwitchButtons = (props) => {
    const data = props.data || null
    const {setVisibleComponents} = GetFromContext()
    return (
        <div className={'_backgroundColor w-100 p-2 rounded-1'}>
            {
                data && data.map(e =>
                    <div className={'d-flex justify-content-between align-items-center'} key={e.id}>
                        <div className="form-check form-switch m-1">
                            <input className="form-check-input c-pointer" type="checkbox" role="switch"
                                   id={`flexSwitchCheck`} onChange={() => setVisibleComponents(e)}/>

                            <label className="form-check-label" htmlFor={`flexSwitchCheck${e.id}`}>
                                {e?.label}
                            </label>
                        </div>
                        <small
                            className={'mx-2 text-dark h6'}>{e.status == true ? "section want display" : 'section will display'}</small>
                    </div>
                )

            }
        </div>
    )
};

export default SwitchButtons;
