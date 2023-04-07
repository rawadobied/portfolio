import Home from "./home/home";
import {
    Route,
    Routes,
} from 'react-router-dom'
import {Statistics} from "./dashbordExports";
import UpdatePage from "./updatePage/updatePage";
import SettingPage from "./settingPage/settingPage";
import {DashboardContextProvider} from "./dashboardContext/dashboardContext";


const Dashboard = (props) => {
    // const path = match()
    // console.log(match)

    return (
        <>
            <DashboardContextProvider>
                <Routes>
                    <Route element={<Home/>}>
                        <Route index element={<Statistics/>}/>
                        <Route exact path={`/home`} element={<Statistics/>}/>
                        <Route exact path={`/update`} element={<UpdatePage/>}/>
                        <Route exact path={`/setting`} element={<SettingPage/>}/>
                    </Route>
                </Routes>
            </DashboardContextProvider>
        </>
    )
};

export default Dashboard;
