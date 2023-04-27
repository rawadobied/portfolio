import './style.scss'
import {Link} from 'react-router-dom'
import {BsCodeSlash} from 'react-icons/bs'
import {LazyLoad} from "../../helpsExports";
import {_sendClick} from "../../../globalContext/serverConfig/axiosApi";
import {GetFromContext} from "../../../globalContext/helperFunction";

const colors = ['07FAA4', '05C2E3', 'EEF025']

const ProjectCard = (props) => {
    const data = props?.data
    const {browser} = GetFromContext()
    return (
        <div className="col-12 col-md-6 border-danger border-2 shadow-lg">
            <div className="imagContainer">
                <LazyLoad src={data?.img}/>
            </div>
            <div className="projectCardContent">
                <h5 className={'main-text-color fw-bold'}>{data?.title}</h5>
                {
                    data?.visited &&
                    <div className={'w-100 d-flex gap-1 m-1'}>
                        <h6 className={'text-decoration-underline my-1'}>{data?.visited}</h6><a href={`/${data?.visitingImg}`}>click her</a>
                    </div>
                }
                <small className={'secondary-text-color content px-2 mt-1'} id={data.title}>{data.details}</small>
                <input type={'checkbox'} className={'expand-button'}
                       onClick={async (e) => {
                           if (browser.toLowerCase()!=='chrome'){
                               let r = await document.getElementById(`${data.title}`) //readmore button is not working on fox
                               if (e.target?.checked) {
                                   r.classList.add('active')
                               } else {
                                   r.classList.remove('active')
                               }
                           }
                       }}
                />
                <div className={'flex-column mt-2'}>
                    <h5>Tech used</h5>
                    <div className={'d-flex flex-wrap mt-3'}>
                        {
                            data?.techUsed.map(e => <small className={'p-2 shadow-sm rounded-1 m-2'} key={e} style={{
                                border: `1px solid #${colors[(Math.floor(Math.random() * colors.length))]}`
                            }}>{e}</small>)
                        }
                    </div>
                </div>
            </div>
            <div className="d-flex w-100 justify-content-center gap-4 mt-4">
                <Link to={data?.liveView} target="_blank">
                    <button className={'btn btn-primary'}
                            onClick={() => _sendClick({type: `live_${data?.title}`})}
                    >Live
                    </button>
                </Link>
                <Link to={data?.code} target="_blank">
                    <button className={'btn d-flex align-items-center'}
                            onClick={() => _sendClick({type: `code_${data?.title}`})}
                    ><BsCodeSlash/>Code
                    </button>
                </Link>
                {
                    data.dashboard &&
                    <Link to={data?.dashboard} target="_blank">
                        <button className={'btn btn-primary'}
                                onClick={() => _sendClick({type: `dashboard_${data?.title}`})}
                        >Dashboard
                        </button>
                    </Link>

                }
            </div>

        </div>
    )
};

export default ProjectCard;
