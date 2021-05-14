import Page from '../components/base_page';
import React, { useEffect } from 'react';
import css from '../styles/common.module.scss';
import Card from '../components/card';
import projects from '../static/data/projects.json';

const handleClick = (c, languages) => {
    if (process.browser) {
        var x, i;
        x = document.getElementsByClassName(`${css.cards}`);
        console.log(x.length);
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], `${css.show}`);
            if (x[i] != null) {
                var languageName = x[i].className.split(' ');
                var languageNameValue = languageName[0];
                if (languageNameValue == c || c == 'all') {
                    AddClass(x[i], `${css.show}`);
                } else if (c == 'other') {
                    var languageDidnotExist = true;
                    languages.uniqueLanguages.map((e) =>
                        e != null
                            ? languageNameValue == e
                                ? (languageDidnotExist = false)
                                : null
                            : null
                    );
                    if (languageDidnotExist) {
                        AddClass(x[i], `${css.show}`);
                    }
                }
            }
        }

        // Show filtered elements
        function AddClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(' ');
            arr2 = name.split('.');
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {
                    element.className += ' ' + arr2[i];
                }
            }
        }

        // Hide elements that are not selected
        function RemoveClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(' ');
            arr2 = name.split('.');
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                    arr1.splice(arr1.indexOf(arr2[i]), 1);
                }
            }
            element.className = arr1.join(' ');
        }

        //Add active class to the current control menu (highlight it)
        var menus = document.getElementsByClassName(`${css.filterMenu}`);
        for (var i = 0; i < menus.length; i++) {
            menus[i].addEventListener('click', function () {
                var current = document.getElementsByClassName(`${css.active}`);
                current[0].className = current[0].className.replace(
                    `${css.active}`,
                    ''
                );
                this.className += ' ' + `${css.active}`;
            });
        }
    }
};

const Project = () => {
    const uniqueLanguages = [...new Set(projects.map((obj) => obj.language))];
    return (
        <Page>
            <div className={css.overlay}>
                <div className={css.banner}></div>
            </div>
            <h1 className={css.bannerTitle}>Projects</h1>
            <div className={css.subTitle}>
                <h4 className={css.underSubTitle}>
                    Browse various permissively-licensed open-source projects
                </h4>
                <hr />
            </div>

            <div className={css.filterCriteria}>
                <div
                    className={`${css.filterCriteriaText} ${css.filterMenu} ${css.active}`}
                    onClick={() => {
                        handleClick('all', { uniqueLanguages });
                    }}
                >
                    All
                </div>

                {uniqueLanguages.map((language) =>
                    language == null ? null : (
                        <div
                            className={`${css.filterCriteriaText} ${css.filterMenu}`}
                            onClick={() => {
                                handleClick(language, { uniqueLanguages });
                            }}
                        >
                            {language}
                        </div>
                    )
                )}

                <div
                    className={`${css.filterCriteriaText} ${css.filterMenu}`}
                    onClick={() => {
                        handleClick('other', { uniqueLanguages });
                    }}
                >
                    Other
                </div>
            </div>
            <hr className={css.projectStartLine} />
            <div className={css.fullProjectsListCard}>
                {projects.map(
                    ({
                        id,
                        name,
                        description,
                        forks_count,
                        watchers_count,
                        language,
                        html_url,
                        fork,
                    }) => (
                        <div className={`${language} ${css.show} ${css.cards}`}>
                            <div className={css.filterCard}>
                                <Card
                                    Key={id}
                                    id={id}
                                    name={name}
                                    description={description}
                                    forks_count={forks_count}
                                    watchers_count={watchers_count}
                                    language={language}
                                    html_url={html_url}
                                />
                            </div>
                        </div>
                    )
                )}
            </div>
        </Page>
    );
};
export default Project;
