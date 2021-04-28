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
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import Features from '../pages/features';
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
                    <h1>What Makes Hacktoolkit Different?</h1>
                    <hr />
            </div>
            <div className={css.subSubTitle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
            </div>
            <div className={css.featureRow}>
                <Features icon={<DoneOutlineIcon style={{fontSize:40}} />} title="Working Codes" detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."/>
                <Features icon={<ForumOutlinedIcon style={{fontSize:40}} />} title="Professional Support" detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."/>
                <Features icon={<PeopleOutlineOutlinedIcon style={{fontSize:40}} />} title="Active Community" detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."/>
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
                    <Image
                        src="/aboutSection1.png"
                        alt="Picture of the author"
                        width={800}
                        height={500}
                    />
                </div>
            </div>
            <hr className={css.hrBlur} />
            <div className={css.subscribe}>
                <h1 className={css.subscribeHeader}>Subscribe to get updates</h1>
                <p className={css.subscribeSubHeader}>By subscribing you will get newsleter, promotions adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.</p>
                <div className={css.contactTextField}>
                    <input className={css.textField} type="text" placeholder="Enter your email" />
                </div>
                <div className={css.contactButton}>
                    <button className={css.button}>Subscribe</button>
                </div>
            </div>

        {/* </div> */}
         
      
        </Page>
    );
}
