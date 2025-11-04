import React from 'react';
import Link from 'next/link';
import Page from '../../components/base_page';
import css from '../../styles/docs.module.scss';
import {
    MenuBook,
    GetApp,
    Code,
    Description,
    Speed,
    Security
} from '@material-ui/icons';

const DocsHome = () => {
    const features = [
        {
            icon: <Speed className={css.featureIcon} />,
            title: 'Production Ready',
            description: 'Battle-tested in production environments with thousands of users.'
        },
        {
            icon: <Security className={css.featureIcon} />,
            title: 'Secure by Default',
            description: 'Built-in security features and best practices for Django applications.'
        },
        {
            icon: <Code className={css.featureIcon} />,
            title: 'Well Documented',
            description: 'Comprehensive documentation with examples and best practices.'
        }
    ];

    return (
        <Page>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.5rem', width: '100%', boxSizing: 'border-box' }}>
                <div className={css.hero}>
                    <h1 className={css.heroTitle}>Django HTK Documentation</h1>
                    <p className={css.heroSubtitle}>
                        A comprehensive toolkit of apps, utilities, and middlewares for Django
                    </p>
                    <div className={css.heroButtons}>
                        <Link href="/docs/getting-started">
                            <a className={css.primaryButton}>
                                <GetApp /> Get Started
                            </a>
                        </Link>
                        <a
                            href="https://github.com/hacktoolkit/django-htk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={css.secondaryButton}
                        >
                            <Code /> View on GitHub
                        </a>
                    </div>
                </div>

                <div className={css.features}>
                    {features.map((feature, idx) => (
                        <div key={idx} className={css.featureCard}>
                            {feature.icon}
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className={css.quickLinks}>
                    <h2>Quick Links</h2>
                    <div className={css.linkGrid}>
                        <Link href="/docs/getting-started">
                            <a className={css.linkCard}>
                                <MenuBook className={css.linkIcon} />
                                <h3>Getting Started</h3>
                                <p>Installation and initial setup guide</p>
                            </a>
                        </Link>
                        <Link href="/docs/modules">
                            <a className={css.linkCard}>
                                <Description className={css.linkIcon} />
                                <h3>Modules</h3>
                                <p>Explore available modules and utilities</p>
                            </a>
                        </Link>
                        <Link href="/docs/api">
                            <a className={css.linkCard}>
                                <Code className={css.linkIcon} />
                                <h3>API Reference</h3>
                                <p>Complete API documentation</p>
                            </a>
                        </Link>
                        <a
                            href="https://github.com/hacktoolkit/django-htk/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={css.linkCard}
                        >
                            <Description className={css.linkIcon} />
                            <h3>Contributing</h3>
                            <p>Help improve Django HTK</p>
                        </a>
                    </div>
                </div>

                <div className={css.installation}>
                    <h2>Quick Installation</h2>
                    <div className={css.codeBlock}>
                        <pre>
                            <code>
{`# Install from GitHub
pip install git+https://github.com/hacktoolkit/django-htk.git

# Or add to requirements.txt
git+https://github.com/hacktoolkit/django-htk.git`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default DocsHome;
