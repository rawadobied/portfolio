import React from 'react';
import './style.scss'
import {BiBarChart} from 'react-icons/bi'

const StatisticsCard = (props) => {
    return (
        <div className={'statisticsCard'}>
            <span className={'spotLight'}></span>
            <div className={'cardWrapper'}>
                <div className="cardContent">
                    <h1 className={'icon'}><BiBarChart/></h1>
                    <div className="cardHeader">
                        <small>{props.title}</small>
                        <h2 className={'subTitle'}>{props.amount}</h2>
                    </div>
                    {
                        props.subtitle &&
                        <small className="cardDetails">
                            {props.subtitle}
                        </small>

                    }
                </div>
            </div>

        </div>
    )
};

export default StatisticsCard;
