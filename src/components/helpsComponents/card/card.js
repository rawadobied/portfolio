import './style.scss';
import {FaAward} from 'react-icons/fa'
// import {RiMessengerLine} from 'react-icons/ri'


const Card = (props) => {
    const data = props?.data || []
    // console.log(data[0]?.name)
    const handleClick = (d) => {
        // window.open(d.click)
        window.open(d.click,'_self');
    }
    return (
        <div className={'cardContent col-3 col-md-6'} onClick={() => handleClick(data)}>
            <article className={'cardArticale'}>
                <div className={'cardIcon h3'}>

                    {data?.icon || <FaAward/>}
                </div>
                <h5>{data?.title}</h5>
                <small >{data.subtitle}</small>
                <p title={data?.text} className={'email'}>{data?.text}</p>
            </article>
        </div>
    )
};

export default Card;
