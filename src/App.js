import React, {useEffect, lazy, Suspense, useState} from 'react';
import './index.css'
import {
    Home,
    Contacts,
    Navbar,
    About,
    Experience,
    Portfolio,
    LinearIndeterminate,
    Projects, PdfViewer
} from "./components/exports";
// import Dashboard from "./dashboard";
import {
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'
import {GetFromContext, setCookie} from "./globalContext/helperFunction";
import Footer from "./components/Footer/footer";
import TermsPage from "./dashboard/termsPage/termsPage";
import CookiesAlert from "./dashboard/cookiesAlert/cookiesAlert";
import {MyTextField} from "./dashboard/dashbordExports";
import {VscGistSecret} from 'react-icons/vsc'
import {TbHandFinger} from 'react-icons/tb'

const Dashboard = lazy(() => import('./dashboard'))


function App() {
    const {loader, cookies, setCookiesAccept, showWorkExperience} = GetFromContext()
    const [password, setMyPassword] = useState('')
    useEffect(() => {
    }, [loader, cookies])

    function cookieAccept() {
        setCookiesAccept(true)
        setCookie('ca', true)
    }

    const setPassword = (v) => {
        setMyPassword(v.target.value)

    }

    return (
        <>
            {
                loader && <LinearIndeterminate/>
            }
            <div className="App position-relative">
                {
                    !cookies && <CookiesAlert handleClick={cookieAccept}/>
                }


                <Suspense fallback={<LinearIndeterminate/>}>
                    {/*<Dashboard/>*/}
                    <Routes>
                        <Route exact path={'/'} element={<Navigate replace to={'/home'}/>}/>
                        <Route exact path={'/home'} element={
                            <>
                                <Home/>
                                <Navbar/>
                                <About/>
                                <section data-section={'experience'} id={'experience'}>
                                    <Experience/>
                                    <Projects/>
                                    <div className={'col-12 text-center mt-5'}>
                                        <div className={''}>
                                            <h5 className={'sectionStyleH5'}>want to see!</h5>
                                            <h2 className={'sectionStyleH2'}>enter my name!</h2>
                                            <h1 className={'m-0 finger-down sectionStyleH5'}><TbHandFinger/></h1>
                                            <div className={'d-flex align-items-center justify-content-center gap-1'}>

                                                <h1 className={'sectionStyleH5'}><VscGistSecret/></h1>

                                                <MyTextField
                                                    placeholder={'Password'}
                                                    focused
                                                    onChange={(e) => setMyPassword(e.target.value)}
                                                    name={'password'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        password.toLowerCase() === 'rawad' &&
                                        <Portfolio/>
                                    }
                                </section>
                                <Contacts/>
                                <Footer/>
                            </>
                        }/>
                        <Route path={'/dashboard/*'} element={
                            <>
                                <Dashboard/>
                            </>
                        }/>
                        <Route path={'/pdf'} element={
                            <PdfViewer/>
                        }/>
                        {/*<Home/>*/}
                        {/*<Navbar/>*/}
                        {/*<About/>*/}

                        {/*/!*<projects/>*!/*/}
                        {/*<Experience/>*/}
                        {/*<Portfolio/>*/}
                        {/*<Contacts/>*/}

                        {/*<Services/>*/}
                        <Route path={'/terms'} element={<TermsPage/>}/>
                    </Routes>
                </Suspense>
            </div>
        </>
    );
}

export default App;
