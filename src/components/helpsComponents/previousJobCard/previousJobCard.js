import './style.scss'
import {BiCheck, BiCalendar} from 'react-icons/bi'
import {MdOutlineHomeWork} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'


const PreviousJobCard = (props) => {
    const data = props?.data
    return (
        <div className="PreviousJobCardWrapper">
            <h4>{props.title}</h4>
            <div className="PreviousJobCardContent">
                {
                    data?.map((d, index) =>
                        <article className={'PreviousJobCardDetails'} key={index}>
                            <div className="titleContainer">
                                <BiCheck className={'titleIcon'}/>
                                <h5>{d.jobPosition}</h5>
                            </div>
                            <a href={`https://${d.webSite}`} target={'_blank'} rel="noreferrer"
                               className={'detailsContainer'}>
                                <h5 style={{color: "#fff"}}><MdOutlineHomeWork/></h5>
                                <h5>{d.workPlace}</h5>

                            </a>
                            <span className="detailsContainer">
                                <h6><ImLocation/></h6>
                                 <small className={'text-light'}>{d.country}</small>
                                   </span>
                            <span className="detailsContainer">
                                         <h6><BiCalendar/></h6>
                                          <small className={'text-light'}>{d.period}</small>
                                    </span>
                        </article>
                    )
                }
            </div>
        </div>
    )
};

export default PreviousJobCard;
