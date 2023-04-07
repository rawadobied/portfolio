import CV from '../../../assets/cv.pdf'
import '../helpsComponentsStyles.scss'


const Cta = (props) => {
    return(
        <div className={'cta'}>
            <a href={CV} download className={'btn'}>Download Cv</a>
            <a href={'#contacts'}  className={'btn btn-primary'}>Let's Talk</a>
        </div>
    )
};

export default Cta;
