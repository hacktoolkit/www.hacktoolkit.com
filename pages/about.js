import Page from '../components/base_page';

import css from '../styles/common.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import PhonelinkOutlinedIcon from '@material-ui/icons/PhonelinkOutlined';
import CompareArrowsOutlinedIcon from '@material-ui/icons/CompareArrowsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import Features from '../components/features';
import homecss from '../styles/Home.module.scss';
import Image from 'next/image';


export default function About() {
    return (
        <Page>
            <div className={css.overlay}>
                <div className={css.aboutBanner}>
                </div>
            </div>
            <h1 className={css.bannerTitle}>About Us</h1>
            <div className={css.subTitle}>
                    <h1  className={css.underSubTitle}>What Makes Hacktoolkit Different?</h1>
                    <hr />
            </div>
            <div className={css.subSubTitle}>
                <p>There will only be one main repository, ever, for Hacktoolkit (with the exception of submodules--more on this later).</p>
            </div>
            <div className={css.featureRow}>
                <Features icon={<DoneOutlineIcon style={{fontSize:40, color:'#38538d'}} />} title="Working Codes" detail="The goal is to be one repository that users can clone and immediately start using, not 47 different repositories."/>
                <Features icon={<ForumOutlinedIcon style={{fontSize:40, color:'#38538d'}} />} title="Easiness" detail="Easy to use; easy onboarding process. We love skeletons and bootstrap code."/>
                <Features icon={<BusinessCenterIcon style={{fontSize:40, color:'#38538d'}} />} title="Quick Usage" detail="Find the best examples that are already existing (don't reinvent the wheel), and import them as submodules"/>
            </div>
            <hr className={css.hrBlur} />
        {/* <div className={homecss.gray_section}> */}
            <div className={css.aboutSection1Holder}>
                <div className={css.aboutSection1Left}>
                <h1 className={css.aboutSection1Header}>Make Hacktoolkit Manage Everything For You</h1>
                <div className={css.aboutSection1LeftLists}>
                    <div className={css.aboutSection1LeftListIcon}><DeveloperModeOutlinedIcon style={{fontSize:40}}/></div>
                    <div className={css.aboutSection1LeftListDetail}>
                        Bootstrap code for websites and mobile apps
                    </div>
                </div>
                <div className={css.aboutSection1LeftLists}>
                    <div className={css.aboutSection1LeftListIcon}><PhonelinkOutlinedIcon style={{fontSize:40}}/></div>
                    <div className={css.aboutSection1LeftListDetail}>
                        Complete working demos and prototypes
                    </div>
                </div>
                <div className={css.aboutSection1LeftLists}>
                    <div className={css.aboutSection1LeftListIcon}><AssignmentOutlinedIcon style={{fontSize:40}}/></div>
                    <div className={css.aboutSection1LeftListDetail}>
                        Implemented design patterns
                    </div>
                </div>
                <div className={css.aboutSection1LeftLists}>
                    <div className={css.aboutSection1LeftListIcon}><CompareArrowsOutlinedIcon style={{fontSize:40}}/></div>
                    <div className={css.aboutSection1LeftListDetail}>
                        Algorithms and data structures in various languages, from simple to complex
                    </div>
                </div>
                <div className={css.aboutSection1LeftLists}>
                    <div className={css.aboutSection1LeftListIcon}><StorefrontOutlinedIcon style={{fontSize:40}}/></div>
                    <div className={css.aboutSection1LeftListDetail}>
                        Working code that integrates with all of the popular APIs–Android, iOS, Google Play Services, Parse, and more!
                    </div>
                </div>
                </div>
                <div className={css.aboutSection1Right}>
                    <img
                        className={css.halfSectionImage}
                        src="/aboutSection1.png"
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <hr className={css.hrBlur} />
        </Page>
    );
}
