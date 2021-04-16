import Page from '../components/base_page';

import css from '../styles/common.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Octokit } from "@octokit/core";


function About() {
    
    console.log("hell0");

    return (
        <Page>
            <h1 className={css.title}>Contact</h1>
        </Page>
    );
}

export default About;
