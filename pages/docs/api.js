import React from 'react';
import Link from 'next/link';
import Page from '../../components/base_page';
import css from '../../styles/docs.module.scss';

const API = () => {
    const apiSections = [
        {
            category: 'Utils',
            items: [
                {
                    name: 'htk_setting',
                    signature: 'htk_setting(key, default=None)',
                    description: 'Get a setting value from Django settings with a fallback default',
                    example: `from htk.utils import htk_setting

api_key = htk_setting('API_KEY', default='')
debug_mode = htk_setting('DEBUG', default=False)`
                },
                {
                    name: 'unix_timestamp',
                    signature: 'unix_timestamp(dt=None)',
                    description: 'Get Unix timestamp for a datetime object or current time',
                    example: `from htk.utils.datetime_utils import unix_timestamp
from datetime import datetime

# Current timestamp
now = unix_timestamp()

# Specific datetime
dt = datetime(2024, 1, 1)
timestamp = unix_timestamp(dt)`
                }
            ]
        },
        {
            category: 'Decorators',
            items: [
                {
                    name: '@deprecated',
                    signature: '@deprecated(message="")',
                    description: 'Mark a function as deprecated with an optional message',
                    example: `from htk.decorators.classes import deprecated

@deprecated('Use new_function() instead')
def old_function():
    return "This is deprecated"

# Calling this will show a deprecation warning`
                },
                {
                    name: '@disable_for_loaddata',
                    signature: '@disable_for_loaddata(signal_handler)',
                    description: 'Disable signal handler during fixture loading',
                    example: `from htk.decorators.db import disable_for_loaddata
from django.db.models.signals import post_save

@disable_for_loaddata
def my_handler(sender, instance, **kwargs):
    # This won't run during loaddata
    pass

post_save.connect(my_handler, sender=MyModel)`
                }
            ]
        },
        {
            category: 'Cache',
            items: [
                {
                    name: 'CustomCacheScheme',
                    signature: 'CustomCacheScheme()',
                    description: 'Flexible caching with custom key generation and TTL',
                    example: `from htk.cache import CustomCacheScheme

cache = CustomCacheScheme(
    'my_cache',
    timeout=3600
)

# Set value
cache.cache_store('key1', 'value1')

# Get value
value = cache.cache_get('key1')`
                }
            ]
        },
        {
            category: 'Validators',
            items: [
                {
                    name: 'is_valid_email',
                    signature: 'is_valid_email(email)',
                    description: 'Validate email address format',
                    example: `from htk.validators import is_valid_email

if is_valid_email('user@example.com'):
    print('Valid email')
else:
    print('Invalid email')`
                },
                {
                    name: 'is_valid_url',
                    signature: 'is_valid_url(url)',
                    description: 'Validate URL format',
                    example: `from htk.validators import is_valid_url

if is_valid_url('https://example.com'):
    print('Valid URL')`
                }
            ]
        },
        {
            category: 'Forms',
            items: [
                {
                    name: 'HTML5EmailField',
                    signature: 'HTML5EmailField(**kwargs)',
                    description: 'Email field with HTML5 validation',
                    example: `from htk.forms.fields import HTML5EmailField
from django import forms

class MyForm(forms.Form):
    email = HTML5EmailField(required=True)`
                }
            ]
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
                            <Link href="/docs/modules"><a className={css.navLink}>Modules</a></Link>
                            <Link href="/docs/api"><a className={css.navLinkActive}>API Reference</a></Link>
                        </div>
                        <div className={css.navSection}>
                            <h4>API Sections</h4>
                            {apiSections.map((section, idx) => (
                                <a key={idx} href={`#${section.category.toLowerCase()}`} className={css.navLink}>
                                    {section.category}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>

                <div className={css.docsContent}>
                    <h1>API Reference</h1>
                    <p className={css.lead}>
                        Complete API documentation for Django HTK modules and utilities.
                    </p>

                    {apiSections.map((section, sectionIdx) => (
                        <section key={sectionIdx} id={section.category.toLowerCase()} className={css.section}>
                            <h2>{section.category}</h2>

                            {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className={css.apiItem}>
                                    <h3 className={css.apiName}>{item.name}</h3>
                                    <div className={css.apiSignature}>
                                        <code>{item.signature}</code>
                                    </div>
                                    <p className={css.apiDescription}>{item.description}</p>

                                    <div className={css.apiExample}>
                                        <h4>Example:</h4>
                                        <div className={css.codeBlock}>
                                            <pre>
                                                <code>{item.example}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    ))}

                    <section className={css.section}>
                        <h2>Additional Resources</h2>
                        <ul className={css.list}>
                            <li>
                                <a
                                    href="https://github.com/hacktoolkit/django-htk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Source Code on GitHub
                                </a> - Browse the full source code
                            </li>
                            <li>
                                <a
                                    href="https://github.com/hacktoolkit/django-htk/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Issue Tracker
                                </a> - Report bugs or request features
                            </li>
                            <li>
                                <Link href="/docs/modules">
                                    <a>Module Overview</a>
                                </Link> - See all available modules
                            </li>
                        </ul>
                    </section>

                    <div className={css.note}>
                        <strong>Contributing:</strong> This API documentation is a work in progress.
                        Help us improve it by contributing examples and documentation on{' '}
                        <a
                            href="https://github.com/hacktoolkit/django-htk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>.
                    </div>

                    <div className={css.pagination}>
                        <Link href="/docs/modules">
                            <a className={css.paginationLink}>
                                ← Modules
                            </a>
                        </Link>
                        <Link href="/docs">
                            <a className={css.paginationLink}>
                                Documentation Home →
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default API;
