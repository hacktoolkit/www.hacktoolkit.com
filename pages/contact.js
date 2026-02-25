import Page from '../components/base_page';
import css from '../styles/common.module.scss';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
    return (
        <Page>
            <div className={css.overlay}>
                <div className={css.contactsBanner}></div>
            </div>
            <h1 className={css.bannerTitle}>Contact</h1>
            <div className={css.subTitle}>
                <h1 className={css.underSubTitle}>Stay Tuned</h1>
                <hr />
            </div>
            <h2 className={css.contactHeader}>Don't hesitate to contact us</h2>
            <p className={css.subContactHeader}>
                We’ll add your name to the contributors list! If you would like
                to be a maintainer for Hacktoolkit, please contact us
            </p>
            <div className={css.contactPageHolder}>
                <div className={css.contactDetail}>
                    <div className={css.contactMailIconHolder}>
                        <div className={css.contactMailIcon}>
                            <a
                                className={css.mailLink}
                                href="mailto:hello@hacktoolkit.com"
                            >
                                <MailIcon
                                    style={{ fontSize: 50, color: '#38538d' }}
                                />{' '}
                                hello@hacktoolkit.com
                            </a>
                            <a
                                className={css.mailLink}
                                href="https://www.facebook.com/hacktoolkit"
                            >
                                <FacebookIcon
                                    style={{ fontSize: 50, color: '#0d8bf0' }}
                                />{' '}
                                https://www.facebook.com/hacktoolkit
                            </a>
                            <a
                                className={css.mailLink}
                                href="https://twitter.com/hacktoolkit"
                            >
                                <TwitterIcon
                                    style={{ fontSize: 50, color: '#1da1f2' }}
                                />{' '}
                                https://twitter.com/hacktoolkit
                            </a>
                            <a
                                className={css.mailLink}
                                href="https://github.com/hacktoolkit"
                            >
                                <GitHubIcon
                                    style={{ fontSize: 45, color: '#000000' }}
                                />{' '}
                                https://github.com/hacktoolkit
                            </a>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </Page>
    );
}

export default Contact;
