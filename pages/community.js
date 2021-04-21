import Page from '../components/base_page';

import css from '../styles/common.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <Page>
            <div className={css.overlay}>
                <div className={css.communityBanner}>
                </div>
            </div>
            <h1 className={css.bannerTitle}>Community</h1>
        </Page>
    );
}
