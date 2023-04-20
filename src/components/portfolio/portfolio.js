import './style.scss';
import {PreviousJobCard} from "../helpsExports";
import {GetFromContext} from "../../globalContext/helperFunction";


const Portfolio = (props) => {

    const{previousJobs}=GetFromContext()
    const data=[
        {
            name:'FullStuck Web Developer',
            date:'April 2021 - April 2022',
            place:'Freelancer',
            country:'Iraq-Erbil',
            webSite:'www.sipanhotels.com'

        },
        {
            name:'IT Manager',
            date:'April 2021 - April 2022',
            place:'Sipan Hotel',
            country:'Iraq-Erbil',
            webSite:'www.sipanhotels.com'

        },
        {
            name:'IT Manager',
            date:'March 2018 - April 2021',
            place:'Best Western Plus Erbil Hotel',
            country:'Iraq-Erbil',
            webSite:'www.sipanhotels.com'

        },
        {
            name:'Receptionist',
            date:'June 2018 - October 2018',
            place:'Hyksos Hotel',
            country:'Iraq-Erbil',
            webSite:'www.sipanhotels.com'

        },
        {
            name:'Team leader',
            date:'January 2018 - June 2018',
            place:'UNICEF',
            country:'Lebanon',
            webSite:'www.sipanhotels.com'

        },
        {
            name:'IT Manager',
            date:'January 2015 - May 2017',
            place:'Sheraton Ma\'aret Sednaya Hotel',
            country:'Damascus',
            webSite:'www.sipanhotels.com'

        },
        {
            name:'Technical Support',
            date:'October 2009 - December. 2014',
            place:'Real Word For Technology ',
            country:'Damascus'

        },
    ]
    return(
        <section id={'portfolio'}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className={'container-xxl portfolioContainer'}>
                <PreviousJobCard title={'Previous Jobs'} data={previousJobs}/>
            </div>
        </section>
    )
};

export default Portfolio;
