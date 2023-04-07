import './style.scss'
import {RatingComponent} from '../exports'

const Footer = (props) => {
    return (

        <div className={'footerContainer'}>
            <div className={'container footerItems'}>
                <div className="footerItem">
                    <div className="footerSocials">

                    </div>
                </div>
                <div className="footerItem">
                    <RatingComponent/>
                    <div className="footerCopyright">
                        <small>&copy; Rawad Obied. All rights reserved</small>
                    </div>

                </div>

            </div>

        </div>

    )
};

export default Footer;
