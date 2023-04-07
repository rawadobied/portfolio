import {createContext, useEffect, useRef, useState} from "react";
import {_getRates, _getStatistics, _getLastUpdates} from '../../globalContext/serverConfig/axiosApi'
import {GetFromContext} from "../../globalContext/helperFunction";


export const DashboardContext = createContext({})


export const DashboardContextProvider = (props) => {
    const {setLoader} = GetFromContext()
    const [lastRates, setLastRates] = useState([])
    const [lastUpdates, setLastUpdates] = useState(null)
    const [statistics, setStatistics] = useState(null)
    const mounted = useRef(true) // render one time

    useEffect(() => {
        setLoader(true)
        const x = () => {
            mounted.current = false
        }
        {

            mounted.current &&
            _getRates().then(res => {

                let myRate = JSON.parse(localStorage.getItem('rate')) || null
                if (myRate) {
                    let arr = res.data.data
                    arr.unshift(myRate)
                    setLastRates(arr)
                } else {
                    setLastRates(res.data.data)
                }
            }).catch(e => null)
            _getStatistics().then(res => setStatistics(res.data.data[0])).catch(e => console.log(e))
            _getLastUpdates().then(res => {
                res.data.message === 'success' && setLastUpdates(res.data.data)
                setLoader(false)
            }).catch(e => console.log)
                .finally(() => setLoader(false))

        }
        return () => x()

    }, [])

    return (
        <DashboardContext.Provider value={{lastRates, statistics, lastUpdates}}>
            {props.children}
        </DashboardContext.Provider>
    )
}
