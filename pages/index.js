import { AccessAlarm} from '@material-ui/icons';
import ComputerIcon from '@material-ui/icons/Computer';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Icon from '@material-ui/core/Icon';
import Page from '../components/base_page';
import Welcome from '../components/js/text_effect';
import css from '../styles/common.module.scss';
import teamcss from '../styles/teams.module.scss';
import homecss from '../styles/Home.module.scss';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import ReactCountryFlag from "react-country-flag";
import Member from '../components/member';
import { Octokit } from "@octokit/core";
import React, { useEffect, useState } from "react";
import Card from '../components/card';
import Link from 'next/link';
import teams from '../static/data/team_members.json';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { blue } from '@material-ui/core/colors';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const Home = () =>{
    return (
        <Page>
            
            <div className={homecss.white_section}>
                <div className={css.whitebackgroundimage}>
                        <div className={css.title}>
                        <div className={css.title_max}>
                                Open-source <Welcome /> <span className="text"></span>
                        </div>
                        <div className={css.mini_title}>
                        Win hackathons by using refined APIs and bootstrap code to build complete websites and apps in 24 hours. 
                        </div>
                    </div>
                </div>
            </div>
            <div className={homecss.black_section}>
                    <h1 className={css.sectiontitle}>What is Hacktoolkit?</h1>
                    <h4 className={css.sectionbody}>Hacktoolkit is a collection of bootstrap code that you can use to start your next project, whether it’s a website or mobile app, by letting you to:
                    </h4>
                    <div className={css.homesection2body}>
                        <div className={css.homesection2card}>
                            <ComputerIcon className={css.blackSectionIcons}/>
                            <p className={css.centerTitleText}>Write code yourself</p>
                            <p className={css.centerText}>The best way to get better at programming is to write code yourself, and learn from well-written code by others.                                
                            </p>
                        </div>
                        <div className={css.homesection2card}>
                            <AccessAlarm className={css.blackSectionIcons}/>
                            <p className={css.centerTitleText}>Handle time Limitations</p>
                            <p className={css.centerText}>Hackathons are typically 24-48 hour programming competitions where a lot of programming nerds and geeks get together.                                
                            </p>
                        </div>
                        <div className={css.homesection2card}>
                            <CenterFocusWeakIcon className={css.blackSectionIcons}/>
                            <p className={css.centerTitleText}>Focus on Creating</p>
                            <p className={css.centerText}>The best way to get better at programming is to write code yourself, and learn from well-written code by others.                                
                            </p>
                        </div>
                        <div className={css.homesection2card}>
                            <DynamicFeedIcon className={css.blackSectionIcons}/>
                            <p className={css.centerTitleText}>Clone the repository</p>
                            <p className={css.centerText}>(git clone git@github.com:hacktoolkit/hacktoolkit.git) and start using it!                                
                            </p>
                        </div>
                        <div className={css.homesection2card}>
                            <DeviceHubIcon className={css.blackSectionIcons}/>
                            <p className={css.centerTitleText}>Fork the repository</p>
                            <p className={css.centerText}>Fork the repository if you want to contribute for new things to incorporate back into the hacktoolkit library.                         
                            </p>
                        </div>
                        <div className={css.homesection2card}>
                            <EmojiPeopleIcon className={css.blackSectionIcons}/>
                            <p className={css.centerTitleText}>Issue pull requests </p>
                            <p className={css.centerText}> Formatting requirements TBD (provide a README.md and description of what your code does).                             
                            </p>
                        </div>
                    </div>
            </div>
            
            <div className={homecss.service_section}>
                        <h2 className={css.sectiontitle}>Projects</h2>
                        <h4 className={css.sectionbodygray}>Convenient open-source projects enabling rich experiences and world-class applications </h4>
                        <div className={css.cardHolder}>
                            <Card id="15924904" name="django-htk" description="A set of apps, utilities, middlewares, etc for Django" forks_count="" watchers_count="" language="" html_url="https://github.com/hacktoolkit/django-htk" />
                            <Card id="15924904" name="chrome-extensions" description="A collection of awesome Chrome extensions" forks_count="" watchers_count="" language="" html_url="https://github.com/hacktoolkit/xterm.js" />
                            <Card id="15924904" name="xterm.js" description="A drop-in JavaScript module to colorize Xterm output on your webpages. Absolutely no external dependencies required!" forks_count="" watchers_count="" language="" html_url="https://github.com/hacktoolkit/chrome-extensions" />
                            {/* <div className={css.moreProjectIcon}>
                                <Link href="/projects">
                                    <ArrowForwardIosIcon style={{fontSize:50, marginTop:160, marginRight:20, color:'#006ac6', cursor:'pointer'}} />
                                </Link>
                            </div> */}
                        </div>
                        <Link href="/projects">
                            <h2 className={css.seeMore}>See more projects...</h2>
                        </Link>
            </div>

            {/* Team Section */}
            <div className={homecss.team_section}>
                {/* <Member /> */}
                {/* <div className={css.teambackgroundimage}> */}
                        <h2 className={css.sectiontitle}>Community</h2>
                        <h4 className={css.sectionbodywhite}>Our valuable contributors and collaborators come from all over the world
                        </h4>
                        <div className={teamcss.ImageLists}>
                            {teams.data.map(({id,login,html_url,avatar_url}) => (
                                <Member key={id} login={login} html_url={html_url} avatar_url={avatar_url} />
                            ))}
                        </div>
                    {/* </div> */}
            </div>
        </Page>
    );
}

// export async function getStaticProps() 
// {
//         const octokit = new Octokit({
//         auth: process.env.GITHUB_API_KEY ,
//         });
    
//         const res = await octokit.request("/organizations/5404851/team/509218/members");
//         const teams = await res;
//         return {
//             props: { 
//                 teams,
//                 },
//         }
    
// }

export default Home