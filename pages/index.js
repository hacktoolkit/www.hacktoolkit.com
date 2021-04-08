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
                <h2>Second Section</h2>
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

