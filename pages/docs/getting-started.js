import React from 'react';
import Link from 'next/link';
import Page from '../../components/base_page';
import css from '../../styles/docs.module.scss';

const GettingStarted = () => {
    return (
        <Page>
            <div className={css.docsContainer}>
                <div className={css.docsSidebar}>
                    <nav className={css.sidebarNav}>
                        <Link href="/docs"><a className={css.navLink}>← Documentation Home</a></Link>
                        <div className={css.navSection}>
                            <h4>Getting Started</h4>
                            <a href="#installation" className={css.navLink}>Installation</a>
                            <a href="#configuration" className={css.navLink}>Configuration</a>
                            <a href="#quick-start" className={css.navLink}>Quick Start</a>
                            <a href="#next-steps" className={css.navLink}>Next Steps</a>
                        </div>
                        <div className={css.navSection}>
                            <h4>Resources</h4>
                            <Link href="/docs/modules"><a className={css.navLink}>Modules</a></Link>
                            <Link href="/docs/api"><a className={css.navLink}>API Reference</a></Link>
                        </div>
                    </nav>
                </div>

                <div className={css.docsContent}>
                    <h1>Getting Started with Django HTK</h1>
                    <p className={css.lead}>
                        Django HTK is a comprehensive toolkit providing a set of apps, utilities,
                        middlewares, and more for Django applications.
                    </p>

                    <section id="installation" className={css.section}>
                        <h2>Installation</h2>
                        <p>Django HTK can be installed directly from GitHub:</p>

                        <div className={css.codeBlock}>
                            <pre>
                                <code>
{`# Install using pip
pip install git+https://github.com/hacktoolkit/django-htk.git`}
                                </code>
                            </pre>
                        </div>

                        <p>Or add it to your <code>requirements.txt</code>:</p>

                        <div className={css.codeBlock}>
                            <pre>
                                <code>
{`# requirements.txt
git+https://github.com/hacktoolkit/django-htk.git`}
                                </code>
                            </pre>
                        </div>

                        <div className={css.note}>
                            <strong>Note:</strong> Django HTK requires Python 3.6+ and Django 2.2+
                        </div>
                    </section>

                    <section id="configuration" className={css.section}>
                        <h2>Configuration</h2>
                        <p>Add HTK to your Django project's <code>INSTALLED_APPS</code>:</p>

                        <div className={css.codeBlock}>
                            <pre>
                                <code>
{`# settings.py
INSTALLED_APPS = [
    # ... other apps
    'htk',
    'htk.apps.accounts',
    'htk.apps.cpq',
    'htk.apps.store',
    # Add other HTK apps as needed
]`}
                                </code>
                            </pre>
                        </div>

                        <p>Configure middleware (optional):</p>

                        <div className={css.codeBlock}>
                            <pre>
                                <code>
{`# settings.py
MIDDLEWARE = [
    # ... other middleware
    'htk.middleware.classes.GlobalRequestMiddleware',
    'htk.middleware.classes.RequestTimerMiddleware',
]`}
                                </code>
                            </pre>
                        </div>
                    </section>

                    <section id="quick-start" className={css.section}>
                        <h2>Quick Start</h2>
                        <p>Here's a quick example of using HTK utilities:</p>

                        <div className={css.codeBlock}>
                            <pre>
                                <code>
{`# Using HTK decorators
from htk.decorators.classes import deprecated

@deprecated('Use new_function instead')
def old_function():
    pass

# Using HTK utilities
from htk.utils import htk_setting
from htk.utils.datetime_utils import unix_timestamp

# Get a setting with fallback
api_key = htk_setting('API_KEY', default='')

# Get current unix timestamp
timestamp = unix_timestamp()`}
                                </code>
                            </pre>
                        </div>
                    </section>

                    <section id="next-steps" className={css.section}>
                        <h2>Next Steps</h2>
                        <p>Now that you have Django HTK installed, explore these resources:</p>

                        <ul className={css.list}>
                            <li>
                                <Link href="/docs/modules">
                                    <a>Browse available modules</a>
                                </Link> - Learn about all the available HTK modules
                            </li>
                            <li>
                                <Link href="/docs/api">
                                    <a>API Reference</a>
                                </Link> - Detailed documentation for all APIs
                            </li>
                            <li>
                                <a
                                    href="https://github.com/hacktoolkit/django-htk/tree/master/docs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub Documentation
                                </a> - Additional documentation on GitHub
                            </li>
                            <li>
                                <a
                                    href="https://github.com/hacktoolkit/django-htk/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Report Issues
                                </a> - Found a bug? Let us know!
                            </li>
                        </ul>
                    </section>

                    <div className={css.pagination}>
                        <Link href="/docs">
                            <a className={css.paginationLink}>
                                ← Documentation Home
                            </a>
                        </Link>
                        <Link href="/docs/modules">
                            <a className={css.paginationLink}>
                                Modules →
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default GettingStarted;
