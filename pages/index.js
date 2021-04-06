import Page from '../components/base_page';
import '../components/js/text_effect';

import css from '../styles/common.module.scss';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
    return (
        <Page>
            <div className={css.title}>
                <div className={css.title_max}>
                    Open-source <span className="text"></span>
                </div>
                <div className={css.mini_title}>
                Win hackathons by using refined APIs and bootstrap code to build complete websites and apps in 24 hours. 
                </div>
            </div>
        </Page>
    );
}

