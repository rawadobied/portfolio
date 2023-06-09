import React from 'react';

const CookiesAlert = (props) => {
        return (
            <div className={'vw-100 position-fixed bottom-0 vh-100 bg-opacity-50 bg-dark'} style={{zIndex: 1500}}>
                <div className={'w-100 position-absolute bottom-0 bg-warning p-3 p-md-5 animateUp'}>
                    <div className="container-xxl text-center">
                        <div className="col-12 d-flex flex-column">
                            <small>

                                rawad.net uses cookies to distinguish you from other users of our site.
                                This helps us to provide you with a good experience when you browse our site and also allows
                                us to improve our site.
                            </small>
                            <button type={'button'} onClick={()=>props?.handleClick()} className={'btn btn-secondary btn-lg mt-2 mx-auto'}>Accept</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
;
// setCookie('ca',true)

export default CookiesAlert;
