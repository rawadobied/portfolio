import './style.scss';
import {Card, Form} from '../helpsExports'
import {RiWhatsappLine} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import {ImMobile} from 'react-icons/im'

const Contacts = (props) => {

    const data = [
        {
            title: 'email',
            icon: <MdEmail/>,
            text:'me@rawad.net',
            click:'mailto:me@rawad.net'
        },
        {
            title: 'Whatsapp',
            icon: <RiWhatsappLine/>,
            text:'+4917684478770',
            click:'https://wa.me/+4917684478770'
        },
        {
            title: 'Mobile',
            icon: <ImMobile/>,
            text:'+4917684478770',
            click:'tel:+4917684478770'
        },
    ]
    return (
        <section id={'contacts'} data-section={'contacts'}>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container-xxl">
                <div className="d-flex flex-wrap flex-lg-nowrap gap-2">
                    <div className="col-12 col-lg-3 col-md-3 d-flex gap-2 overflow-scroll flex-sm-nowrap flex-md-wrap">
                        {
                            data && data.map((e, index) => <Card data={e} key={index}/>)
                        }
                    </div>
                    <div className="contactForm col-12 col-sm-12 col-md-8 col-lg-9">
                        <Form/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contacts;
