import React from 'react';
import {Helmet} from 'react-helmet'

const Seo = (props) => {
    return(
        <>
            <Helmet>
                <meta property="og:site_name" content="Rawad Obied dashboard"/>
                <meta property="og:title" content="dashboard"/>
                <meta property="og:image" itemProp="image" content="https://rawad.net/me.png"/>
                <meta property="og:image:width" content="80"/>
                <meta property="og:image:height" content="110"/>
                <title>Rawad Dashboard</title>
            </Helmet>
            {props.children}
        </>
    )
};

export default Seo;
