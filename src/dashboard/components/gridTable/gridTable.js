import React, {useEffect} from 'react';
import './style.scss'
import {AiFillStar} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {Rating} from "../../../components/helpsExports";
import {encryptName} from '../../../globalContext/helperFunction'
import moment from "moment/moment";
import {tz} from'moment-timezone'

const GridTable = (props) => {


    const data = props.data
    // || [
    //     {name: 'rawad', rate: 4},
    //     {name: '', rate: 3},
    //     {name: 'elias', rate: 4},
    //     {name: 'firas', rate: 5},
    //     {name: 'firas', rate: 5},
    //     {name: 'firas', rate: 5},
    //     {name: 'firas', rate: 5}
    // ]
    function checkNames(e) {
        let n = (props.withCrypt ? e.name.toLowerCase() == 'anonymous' ? 'anonymous' : encryptName(e.name) : e.name) || 'anonymous'
        return <h6 className={'fw-bolder'} title={n}>{n}</h6>
    }

    function changClock(e) {
        if (e) {
            let utc= moment().utcOffset()
            let m = moment(e)
            m.add(utc, "minutes")
            return moment(m).format('lll')
        }

    }

    return (
        <div className={'experienceWrapper gridTableContainer'}>
            <div className={'gridTableTitle shadow'}>
                <small>{props?.title || 'Last'}</small>
            </div>
            <div className="w-100 d-flex flex-column flex-wrap p-1 p-sm-2 p-md-3">
                {
                    data && data?.map((e, index) =>
                        <div className={'d-flex w-100 mb-1 min-width-content flex-wrap align-items-center'} key={index}>
                            <div className={'gridTableHeader p-1 col-4 align-items-center'}>
                                <div className="display-4 align-items-center d-flex gap-2">
                                    <span className={'h5'}>
                                         <FaUserCircle/>
                                    </span>
                                    {
                                        checkNames(e)  // for title check return h6
                                    }
                                </div>
                            </div>

                            <div className={'col-4'} title={e?.comment}>
                                <article>
                                    {e?.comment || ''}
                                </article>
                            </div>

                            <div className={'col-4'}>

                                {
                                    e?.rate || e?.rate_star ?
                                        <Rating value={e?.rate || parseInt(e?.rate_star)} rate/>
                                        :
                                        <h6 className={'text-gray'}>{changClock(e?.updated_at)}

                                        </h6>
                                }
                            </div>
                            <div className="line m-1 mx-auto bg-black bg-opacity-25 shadow-sm"></div>
                        </div>
                    )
                }

            </div>
        </div>
    )
};

export default GridTable;
