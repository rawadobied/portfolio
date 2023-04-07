import './style.scss'
import {Link} from 'react-router-dom'
import {BsCodeSlash} from 'react-icons/bs'
import {LazyLoad} from "../../helpsExports";

const colors = ['07FAA4', '05C2E3', 'EEF025']

const ProjectCard = (props) => {
    const data = props?.data
    return (
        <div className="col-12 col-md-5 m-1 border-danger border-2 shadow-lg">
            {/*<h3>{props.title}</h3>*/}
            <div className="imagContainer">
                <LazyLoad src={data?.img}/>
                {/*<img className={''} src={require(`../../../assets/${data?.img}`)} alt=""/>*/}
                {/*<div className="background"></div>*/}
            </div>
            <div className="projectCardContent px-4">
                <h5>{data?.title}</h5>
                <small className={'font-italic --color-bg text-light'}>{data.details}</small>
                <div className={'flex-column mt-2'}>
                    <h5>Tech used</h5>
                    <div className={'d-flex flex-wrap mt-3'}>
                        {
                            data?.techUsed.map(e => <small className={'p-2 shadow-sm rounded-1 m-2'} key={e} style={{
                                border:`1px solid #${colors[(Math.floor(Math.random()*colors.length))]}`
                            }}>{e}</small>)
                        }
                    </div>
                </div>

                {/*{*/}
                {/*    data?.map((d, index) =>*/}
                {/*        <article className={'projectCardDetails'} key={index}>*/}

                {/*            <div className="titleContainer">*/}
                {/*                <Suspense fallback={<h1>Lo</h1>}>*/}
                {/*                    <BsPatchCheckFill className={'titleIcon'}/>*/}
                {/*                </Suspense>*/}
                {/*                <h4>{d?.title}</h4>*/}
                {/*            </div>*/}
                {/*            <small className={'text-light'}><Chart percentage={d.level} title={d.level}/></small>*/}
                {/*        </article>*/}
                {/*    )*/}
                {/*}*/}
            </div>
            <div className="d-flex w-100 justify-content-center gap-4 mt-4">
                <Link to={data?.liveView} target="_blank">
                    <button className={'btn btn-primary'}>Live</button>
                </Link>
                <Link to={data?.code} target="_blank">
                    <button className={'btn d-flex align-items-center'}><BsCodeSlash/>Code</button>
                </Link>
                {
                    data.dashboard &&
                    <Link to={data?.dashboard} target="_blank">
                        <button className={'btn btn-primary'}>Dashboard</button>
                    </Link>

                }
            </div>

        </div>
    )
};

export default ProjectCard;
