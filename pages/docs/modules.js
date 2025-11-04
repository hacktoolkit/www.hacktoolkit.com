import React from 'react';
import Link from 'next/link';
import Page from '../../components/base_page';
import css from '../../styles/docs.module.scss';
import {
    Apps,
    Security,
    Storage,
    Email,
    Assessment,
    Extension,
    Settings,
    Code
} from '@material-ui/icons';

const Modules = () => {
    const modules = [
        {
            icon: <Apps />,
            name: 'Admin & Admin Tools',
            description: 'Enhanced Django admin interface with additional tools and utilities',
            path: 'htk.admin, htk.admintools'
        },
        {
            icon: <Code />,
            name: 'API',
            description: 'RESTful API utilities and helpers for building robust APIs',
            path: 'htk.api'
        },
        {
            icon: <Security />,
            name: 'Authentication & Accounts',
            description: 'User authentication, account management, and social auth integrations',
            path: 'htk.apps.accounts'
        },
        {
            icon: <Storage />,
            name: 'Cache',
            description: 'Advanced caching utilities and cache management tools',
            path: 'htk.cache'
        },
        {
            icon: <Assessment />,
            name: 'CPQ (Configure, Price, Quote)',
            description: 'Quote and pricing management system',
            path: 'htk.apps.cpq'
        },
        {
            icon: <Extension />,
            name: 'Decorators',
            description: 'Useful function and class decorators for common patterns',
            path: 'htk.decorators'
        },
        {
            icon: <Email />,
            name: 'Email & Mailers',
            description: 'Email sending utilities with template support',
            path: 'htk.mailers'
        },
        {
            icon: <Settings />,
            name: 'Middleware',
            description: 'Request/response processing middleware components',
            path: 'htk.middleware'
        }
    ];

    const utilities = [
        {
            name: 'DateTime Utilities',
            description: 'Helpers for datetime parsing, formatting, and timezone handling',
            path: 'htk.utils.datetime_utils'
        },
        {
            name: 'Text & String Utilities',
            description: 'String manipulation, slugification, and text processing',
            path: 'htk.utils.text'
        },
        {
            name: 'Validators',
            description: 'Custom field validators and validation utilities',
            path: 'htk.validators'
        },
        {
            name: 'Template Tags',
            description: 'Custom Django template tags and filters',
            path: 'htk.templatetags'
        },
        {
            name: 'View Helpers',
            description: 'Common view patterns and helper functions',
            path: 'htk.view_helpers'
        },
        {
            name: 'Forms & Fields',
            description: 'Custom form fields and form utilities',
            path: 'htk.forms'
        }
    ];

    return (
        <Page>
            <div className={css.docsContainer}>
                <div className={css.docsSidebar}>
                    <nav className={css.sidebarNav}>
                        <Link href="/docs"><a className={css.navLink}>← Documentation Home</a></Link>
                        <div className={css.navSection}>
                            <h4>Documentation</h4>
                            <Link href="/docs/getting-started"><a className={css.navLink}>Getting Started</a></Link>
                            <Link href="/docs/modules"><a className={css.navLinkActive}>Modules</a></Link>
                            <Link href="/docs/api"><a className={css.navLink}>API Reference</a></Link>
                        </div>
                        <div className={css.navSection}>
                            <h4>On This Page</h4>
                            <a href="#core-modules" className={css.navLink}>Core Modules</a>
                            <a href="#utilities" className={css.navLink}>Utilities</a>
                        </div>
                    </nav>
                </div>

                <div className={css.docsContent}>
                    <h1>Modules</h1>
                    <p className={css.lead}>
                        Django HTK provides a comprehensive set of modules and utilities
                        to accelerate Django application development.
                    </p>

                    <section id="core-modules" className={css.section}>
                        <h2>Core Modules</h2>
                        <p>
                            These are the main application modules that provide complete
                            functionality for common use cases.
                        </p>

                        <div className={css.moduleGrid}>
                            {modules.map((module, idx) => (
                                <div key={idx} className={css.moduleCard}>
                                    <div className={css.moduleIcon}>{module.icon}</div>
                                    <h3>{module.name}</h3>
                                    <p>{module.description}</p>
                                    <code className={css.modulePath}>{module.path}</code>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="utilities" className={css.section}>
                        <h2>Utilities</h2>
                        <p>
                            Helper functions and utilities for common programming tasks.
                        </p>

                        <div className={css.utilityList}>
                            {utilities.map((util, idx) => (
                                <div key={idx} className={css.utilityCard}>
                                    <h3>{util.name}</h3>
                                    <p>{util.description}</p>
                                    <code className={css.modulePath}>{util.path}</code>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className={css.section}>
                        <h2>Usage Example</h2>
                        <p>Here's how to import and use HTK modules in your Django project:</p>

                        <div className={css.codeBlock}>
                            <pre>
                                <code>
{`# Import specific utilities
from htk.utils.datetime_utils import unix_timestamp
from htk.decorators.classes import deprecated
from htk.utils import htk_setting

# Use in your code
@deprecated('Use new_implementation')
def old_function():
    pass

timestamp = unix_timestamp()
api_key = htk_setting('API_KEY', default='default-key')`}
                                </code>
                            </pre>
                        </div>
                    </section>

                    <div className={css.note}>
                        <strong>Note:</strong> For detailed API documentation of each module,
                        see the <Link href="/docs/api"><a>API Reference</a></Link> section.
                    </div>

                    <div className={css.pagination}>
                        <Link href="/docs/getting-started">
                            <a className={css.paginationLink}>
                                ← Getting Started
                            </a>
                        </Link>
                        <Link href="/docs/api">
                            <a className={css.paginationLink}>
                                API Reference →
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Modules;
