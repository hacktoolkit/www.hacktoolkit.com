import { AccessAlarm} from '@material-ui/icons';
import ComputerIcon from '@material-ui/icons/Computer';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import Icon from '@material-ui/core/Icon';
import Page from '../components/base_page';
import Welcome from '../components/js/text_effect';
import css from '../styles/common.module.scss';
import homecss from '../styles/Home.module.scss';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
    return (
        <Page>
            <div className={homecss.white_section}>
                <div className={css.title}>
                    <div className={css.title_max}>
                        Open-source <Welcome /> <span className="text"></span>
                    </div>
                    <div className={css.mini_title}>
                    Win hackathons by using refined APIs and bootstrap code to build complete websites and apps in 24 hours. 
                    </div>
                </div>
            </div>
            <div className={homecss.black_section}>
                <div className={css.topspace}>
                    <h2 className={css.sectiontitle}>What is Hacktoolkit?</h2>
                    <h4 className={css.sectionbody}>Hacktoolkit is a collection of bootstrap code that you can use to start your next project, whether it’s a website or mobile app, Letting you to:
                    </h4>
                    <div className={css.homesection2body}>
                        <div className={css.homesection2card}>
                            <ComputerIcon className={css.blackSectionIcons}/>
                            <p className={css.centerText}>Write code yourself</p>
                            <p className={css.centerText}>The best way to get better at programming is to write code yourself, and learn from well-written code by others.                                
                            </p>
                        </div>
                        <div className={css.homesection2card}>
                            <AccessAlarm className={css.blackSectionIcons}/>
                            <p className={css.centerText}>Handle time Limitations</p>
                            <p className={css.centerText}>Hackathons are typically 24-48 hour programming competitions where a lot of programming nerds and geeks get together and build a functioning product from scratch–well, the rules typically are that all of your code and designs have to be done during the hackathon, not before–but using open-source code is an exception                                
                            </p>
                        </div>
                        <div className={css.homesection2card}>
                            <CenterFocusWeakIcon className={css.blackSectionIcons}/>
                            <p className={css.centerText}>Focus on Creating</p>
                            <p className={css.centerText}>The best way to get better at programming is to write code yourself, and learn from well-written code by others.                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={homecss.white_section}>
                <h2>Third Section</h2>
            </div>
            <div className={homecss.blue_section}>
                <h2>Fourth Section</h2>
            </div>

        </Page>
    );
}

