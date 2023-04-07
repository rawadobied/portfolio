import './style.scss'
import {BsPatchCheckFill} from 'react-icons/bs'



const ExperienceCard = (props) => {
    const data = props?.data
    return (
        <div className="experienceWrapper pt-4">
            <h4>{props.title}</h4>
            <div className="experienceContent">
                {
                    data?.map((d, index) =>
                        <article className={'experienceDetails col-12 col-md-6'} key={index}>
                            <div className="titleContainer mb-2">
                                <BsPatchCheckFill className={'bg-transparent'}/>
                                <h5>{d?.title}</h5>
                            </div>
                            <small className={'text-light'}>{d.level}</small>
                            {/*<small className={'text-light'}><Chart percentage={d.level} title={d.level}/></small>*/}
                        </article>
                    )
                }
            </div>
        </div>
    )
};

export default ExperienceCard;
