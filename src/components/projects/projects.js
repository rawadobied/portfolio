import './style.scss';
import {GetFromContext} from "../../globalContext/helperFunction";
import {ProjectCard} from "../helpsExports";
import data from '../../assets/data.json'

const Projects = (props) => {
    return (
        <section id={'projects'}>
            <h5 className={'secondary-text-color'}>Projects</h5>
            <h2 className={'main-text-color'}>Previous Projects</h2>
            <div className="container-xxl d-flex flex-wrap">
                {
                    data.myProjects?.map((e, index) =>
                        <ProjectCard data={e} key={index}/>
                    )
                }

            </div>
        </section>
    )
};

export default Projects;
