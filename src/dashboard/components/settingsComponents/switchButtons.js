import React from 'react';

const SwitchButtons = (props) => {
    const data = props.data || null
    return (
        <div className={'_backgroundColor w-100 p-2 rounded-1'}>
            {
                data && data.map(e =>
                    <div className={'d-flex justify-content-between align-items-center'}>
                    <div className="form-check form-switch m-1">
                        <input className="form-check-input c-pointer" type="checkbox" role="switch"
                               id={`flexSwitchCheck${e.id}`} checked={e?.status}/>

                        <label className="form-check-label" htmlFor={`flexSwitchCheck${e.id}`}>
                            {e?.label}
                        </label>
                    </div>
                        <small className={'mx-2 text-dark h6'}>{e.status == true ? "section want display" : 'section will display'}</small>
                    </div>
                )

            }
        </div>
    )
};

export default SwitchButtons;
