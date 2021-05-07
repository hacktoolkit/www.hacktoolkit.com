import Page from '../components/base_page';

import css from '../styles/common.module.scss';
import homecss from '../styles/Home.module.scss';
import teamcss from '../styles/teams.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import teams from '../static/data/team_members.json';
import Member from '../components/member';
import Team from '../components/teamcard';
import Link from 'next/link';
import Image from 'next/image';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function Community() {
    console.log(teams.data);
    return (
        <Page>
            <div className={css.overlay}>
                <div className={css.communityBanner}>
                </div>
            </div>
            <h1 className={css.bannerTitle}>Community</h1>
            <div className={css.subTitle}>
                    <h1 className={css.underSubTitle}>Members and Contributors</h1>
                    <hr />
                    <h3 className={css.underSubDetail}>Our valuable contributors and collaborators come from all over the world</h3>
            </div>
            <div className={teamcss.teamRow}>
                {teams.data.map(({id,login,html_url,avatar_url, type,site_admin}) => (
                   <Team key={id} name={login} url={html_url} image={avatar_url} type={type} admin={site_admin} />
                ))}
            </div>
            <Link href="/contact">
                <h1 className={css.seeMoreTeam}>Join the team...</h1>
            </Link>
            <div className={css.aboutSection1Holder}>
                <div className={css.aboutSection1Left}>
                    <h1 className={css.aboutSection1Header}>Engaged with us on social media</h1>
                    <div className={css.aboutSection1LeftLists}>
                        <div className={css.aboutSection1LeftListIcon}><a className={css.link} href="https://www.facebook.com/hacktoolkit" target="_blank"><FacebookIcon style={{fontSize:50, color:'#0d8bf0'}}/></a></div>
                        <div className={css.aboutSection1LeftListDetail}>
                            Please like our Facebook page, <a className={css.link} href="https://www.facebook.com/hacktoolkit" target="_blank">https://www.facebook.com/hacktoolkit</a>
                        </div>
                    </div>
                    <div className={css.aboutSection1LeftLists}>
                        <div className={css.aboutSection1LeftListIcon}><a className={css.link} href="https://twitter.com/hacktoolkit" target="_blank"><TwitterIcon style={{fontSize:50, color:'#1da1f2'}}/></a></div>
                        <div className={css.aboutSection1LeftListDetail}>
                            Please follow us on Twitter, <a className={css.link} href="https://twitter.com/hacktoolkit" target="_blank">https://twitter.com/hacktoolkit</a>
                        </div>
                    </div>
                </div>
                <div className={css.aboutSection1Right}>
                    <img
                        className={css.halfSectionImage}
                        src="/social.jpg"
                    />
                    {/* <Image 
                        className={css.halfSectionImage}
                        src="/social.jpg"
                        style={{width:"100%",height:"auto"}}
                        layout="fill"
                    /> */}
                </div>
            </div>
            
        </Page>
    );
}
