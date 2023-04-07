import React from 'react';
import './style.scss'

const Chart = (props) => {
    return (
        <div className={'chartContainer'}>
            <div className="chartWrapper">
                <div className="chartCard">
                    <h5 className={'chartTitle'}>{props.title}%</h5>
                    <div className="linesContainer">
                        <div className="firstLine">
                            <div className="progressLine" style={{width: `${props?.percentage}%` || '100%'}}></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Chart;
