import './style.scss';
import {ExperienceCard} from '../helpsExports'
import {GetFromContext} from "../../globalContext/helperFunction";

const Experience = (props) => {

    const {myExperience}=GetFromContext()

    return(
        <section>
            <h5>Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container-xxl experienceContainer">

                {
                    myExperience && myExperience?.map((e,index)=>
                        <div className="experience_frontend experience flex-md-nowrap" key={index}>
                            <ExperienceCard title={e.name} data={e?.data} />
                        </div>

                    )
                }
                {/*<div className="experience_backend experience">*/}
                {/*    <ExperienceCard title={'Backend Development'} data={myExperience?.myExpeBack}/>*/}

                {/*</div>*/}
            </div>
        </section>
    )
};

export default Experience;
