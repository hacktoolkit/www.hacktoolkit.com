import Page from '../components/base_page';

import css from '../styles/common.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Octokit } from "@octokit/core";
import HomeIcon from '@material-ui/icons/Home';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import MailIcon from '@material-ui/icons/Mail';
import homecss from '../styles/Home.module.scss';


function About() {
    
    console.log("hell0");

    return (
        <Page>
            <div className={css.overlay}>
                <div className={css.contactsBanner}>
                </div>
            </div>
            <h1 className={css.bannerTitle}>Contact</h1>
                <div className={css.subTitle}>
                    <h1  className={css.underSubTitle}>Stay Tuned</h1>
                    <hr />
                </div>
                <div className={css.contactPageHolder}>
                    <div className={css.contactDetail}>
                    <h2>Don't hesitate to contact us</h2>

                        We’ll add your name to the contributors list! If you would like to be a maintainer for Hacktoolkit, please contact us
                        <div className={css.contactHomeIcon}>
                        <HomeIcon style={{fontSize:50, color:'#38538d'}}  />  San Francisco, CA, USA. 
                        </div>
                        <div className={css.contactPhoneIcon}>
                        <PhoneEnabledIcon style={{fontSize:50, color:'#38538d'}}   />  +1 230 456 789-012 345 6789  
                        </div>
                        <div className={css.contactMailIcon}>
                        <MailIcon style={{fontSize:50, color:'#38538d'}}  /> hello@hacktoolkit.com
                        </div>
                        <br />
                    </div>
                    <div className={css.contactForm}>
                        <div className={css.contactTextField}>
                            <input className={css.textField} type="text" placeholder="Name" />
                        </div>
                        <div className={css.contactTextField}>
                            <input className={css.textField} type="text" placeholder="Email" />
                        </div>
                        <div className={css.contactTextField}>
                            <input className={css.textField} type="text" placeholder="Subject" />
                        </div>
                        <div className={css.contactTextField}>
                            <textarea className={css.textAreaField} type="text" placeholder="Message" />
                        </div>
                        <div className={css.contactButton}>
                            <button className={css.button}>Send Message</button>
                        </div>
                    </div>
                </div>
                <div className={homecss.map_section}>
                </div>
        </Page>
    );
}

export default About;
