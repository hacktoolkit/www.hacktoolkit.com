import Page from '../components/base_page';

import css from '../styles/common.module.scss';
import homecss from '../styles/Home.module.scss';
import teamcss from '../styles/teams.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import teams from '../static/data/team_members.json';
import Member from '../pages/member';

export default function About() {
    return (
        <Page>
            <div className={css.overlay}>
                <div className={css.communityBanner}>
                </div>
            </div>
            <h1 className={css.bannerTitle}>Community</h1>
            <div className={css.subTitle}>
                    <h1 className={css.underSubTitle}>Valuable Members</h1>
                    <hr />
                    <h3 className={css.underSubDetail}>Our valuable contributors and collaborators come from all over the world</h3>
                </div>
            {/* Team Section */}
            <div className={homecss.community_section}>
                {/* <Member /> */}
                <div className={css.teambackgroundimage}>
                        <div className={teamcss.ImageLists}>
                            {teams.data.map(({id,login,html_url,avatar_url}) => (
                                <Member key={id} login={login} html_url={html_url} avatar_url={avatar_url} />
                            ))}
                        </div>
                </div>
            </div>
        </Page>
    );
}
