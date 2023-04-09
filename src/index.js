import "react-app-polyfill/ie9"
import "react-app-polyfill/stable"
import React from 'react';
import {HelmetProvider} from "react-helmet-async";
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {MyGlobalContext} from "./globalContext/globalContext";

import * as serviceWorker from './serviceWorker'



// ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <MyGlobalContext>
//                 <App/>
//             </MyGlobalContext>
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
// );


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <MyGlobalContext>
                <HelmetProvider>
                    <App/>
                </HelmetProvider>
            </MyGlobalContext>
        </BrowserRouter>
    </React.StrictMode>,)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//
// serviceWorker.unregister()
