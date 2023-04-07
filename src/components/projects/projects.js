import './style.scss';
import {GetFromContext} from "../../globalContext/helperFunction";
import {ProjectCard} from "../helpsExports";
import data from '../../assets/data.json'

const Projects = (props) => {
    return (
        <section id={'projects'}>
            <h5>Projects</h5>
            <h2>Previous Projects</h2>
            <div className="container d-flex flex-wrap g-2 justify-content-center">
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
