import Page from '../components/base_page';

import css from '../styles/common.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Octokit } from "@octokit/core";
import HomeIcon from '@material-ui/icons/Home';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import MailIcon from '@material-ui/icons/Mail';
import homecss from '../styles/Home.module.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

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
                <h2 className={css.contactHeader}>Don't hesitate to contact us</h2>
                    <p className={css.subContactHeader}>
                        We’ll add your name to the contributors list! If you would like to be a maintainer for Hacktoolkit, please contact us
                    </p>
                <div className={css.contactPageHolder}>
                    <div className={css.contactDetail}>
                        <div className={css.contactMailIconHolder}>
                            <div className={css.contactMailIcon}>
                                <a className={css.mailLink} href="mailto:hello@hacktoolkit.com">
                                    <MailIcon style={{fontSize:50, color:'#38538d'}}/> hello@hacktoolkit.com
                                </a>
                                <a className={css.mailLink} href="https://www.facebook.com/hacktoolkit">
                                    <FacebookIcon style={{fontSize:50, color:'#0d8bf0'}}/> https://www.facebook.com/hacktoolkit
                                </a>
                                <a className={css.mailLink} href="https://twitter.com/hacktoolkit">
                                    <TwitterIcon style={{fontSize:50, color:'#1da1f2'}}/> https://twitter.com/hacktoolkit
                                </a>
                                <a className={css.mailLink} href="https://github.com/hacktoolkit">
                                    <GitHubIcon style={{fontSize:45, color:'#000000'}}/> https://github.com/hacktoolkit
                                </a>
                            </div>
                        </div>
                        <br />
                    </div>
                    {/* <div className={css.contactForm}>
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
                    </div> */}
                </div>
        </Page>
    );
}

export default About;
