import React, {useEffect} from 'react';
import {StatisticsCard} from '../../components/helpsExports'
import './style.scss'
import GridTable from "../components/gridTable/gridTable";
import {GetFromDashboardContext} from "../../globalContext/helperFunction";


const Statistics = (props) => {
    const {lastRates, statistics, lastUpdates} = GetFromDashboardContext()

    useEffect(() => {
    }, [lastRates])
    return (
        <>
            <div className={'statisticsContainer'}>
                <div className="StatisticsSection">
                    <div className="headerContainer">
                        <h1>General Statistics</h1>
                    </div>
                    <div className="detailsContainer">
                        <StatisticsCard title={'Traffic Inbound'} amount={statistics?.traffic || ''} subtitle={'+10%'}/>
                        <StatisticsCard title={'New Clients'} amount={statistics?.new_clients || ''} subtitle={'+2%'}/>
                        <StatisticsCard title={'Email Sent'} amount={statistics?.emails || ''} subtitle={'+2%'}/>
                        <StatisticsCard title={'Email Sent'} amount={statistics?.emails || ''} subtitle={'+2%'}/>
                        <StatisticsCard title={'Average Visit time'} amount={statistics?.rate_submit || ''}
                                        subtitle={'+2%'}/>
                    </div>
                </div>
                <div className="StatisticsSection">
                    <div className="headerContainer">
                        <h1>Portfolio</h1>
                    </div>
                    <div className="detailsContainer justify-content-between">


                        <GridTable title={'Last Rates'} data={lastRates && lastRates} withCrypt={true}/>
                        {
                            lastUpdates &&
                            <GridTable title={'Last Updates'} data={lastUpdates} withCrypt={true}/>

                        }
                        {/*<Rating/>*/}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Statistics;



