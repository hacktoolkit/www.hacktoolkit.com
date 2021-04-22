import Page from '../components/base_page';
import React, {useEffect} from "react";
import css from '../styles/common.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../pages/card';

const handleClick = (c) =>{
    if (process.browser) {
        var x, i;
        x = document.getElementsByClassName("common_filterCard__3g-4W");
        console.log(x);
        if (c == "all") c = "";
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    

        // Show filtered elements
        function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
            }
        }
        }

        // Hide elements that are not selected
        function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
        }

        // Add active class to the current control button (highlight it)
        //     var btnContainer = document.getElementById("myBtnContainer");
        //     var btns = btnContainer.getElementsByClassName("common_filterCriteriaText__2V-6K");
        //     for (var i = 0; i < btns.length; i++) {
        //     btns[i].addEventListener("click", function() {
        //         var current = document.getElementsByClassName("active");
        //         current[0].className = current[0].className.replace(" active", "");
        //         this.className += " active";
        //     });
        //     console.log(e)
        // }
    }
}

export default function About() {

    return (
        <Page>
            <div className={css.overlay}>
                <div className={css.banner}>
                </div>
            </div>
            <h1 className={css.bannerTitle}>Projects</h1>
            <div className={css.subTitle}>
                <h4>Our world class project lists</h4>
                <hr />
            </div>
            <div className={css.filterCriteria}>
                <div className={css.filterCriteriaText} onClick={() => {handleClick("all")}} >All</div>
                <div className={css.filterCriteriaText} onClick={() => {handleClick("Python")}}>Python</div>
                <div className={css.filterCriteriaText} onClick={() => {handleClick("NextJs")}}>Javascript</div>
                <div className={css.filterCriteriaText} onClick={() => {handleClick("Ruby")}}>HTML</div>
                <div className={css.filterCriteriaText} onClick={() => {handleClick("Ruby")}}>CSS</div>
                <div className={css.filterCriteriaText} onClick={() => {handleClick("Ruby")}}>Ruby</div>
            </div>
            <hr className={css.projectStartLine}/>
            <div className={css.fullProjectsListCard}>
                <div className={css.filterCard}>
                    <div className={css.nextJs}>
                        <Card title="django-htk" about="A set of apps, utilities, middlewares, etc for Django" />
                    </div>
                </div>
                <div className={css.filterCard}>
                    <div className={css.nextJs}>
                        <Card title="phablytics" about="Analytics, metrics, and reports for Phabricator (https://phacility.com/phabricator/)." />
                    </div>
                </div>
                <div className={css.filterCard}>
                    <div className={css.nextJs}>
                        <Card title="xterm.js" about="A drop-in JavaScript module to colorize Xterm output on your webpages. Absolutely no external dependencies required!" />
                    </div>
                </div>
                <div className={css.filterCard}>
                    <div className={css.nextJs}>
                        <Card title="chrome-extensions" about="A collection of awesome Chrome extensions" />
                    </div>
                </div>
                <div className={css.filterCard}>
                    <div className={css.vueJs}>
                        <Card title="django-htk" about="A set of apps, utilities, middlewares, etc for Django" />
                    </div>
                </div>
                <div className={css.filterCard}>
                    <div className={css.vueJs}>
                        <Card title="django-htk" about="A set of apps, utilities, middlewares, etc for Django" />
                    </div>
                </div>
                <div className={css.filterCard}>
                    <div className={css.vueJs}>
                        <Card title="django-htk" about="A set of apps, utilities, middlewares, etc for Django" />
                    </div>
                </div>
                <div className={css.filterCard}>
                    <div className={css.vueJs}>
                        <Card title="django-htk" about="A set of apps, utilities, middlewares, etc for Django" />
                    </div>
                </div>
                <div className={css.filterCard}>
                    <div className={css.python}>
                        <Card title="django-htk" about="A set of apps, utilities, middlewares, etc for Django" />
                    </div>
                </div>
                <div className={css.filterCard}>
                    <div className={css.python}>
                        <Card title="django-htk" about="A set of apps, utilities, middlewares, etc for Django" />
                    </div>
                </div>
                <div className={css.filterCard}>
                    <div className={css.python}>
                        <Card title="django-htk" about="A set of apps, utilities, middlewares, etc for Django" />
                    </div>
                </div>
                
            </div>
        </Page>
    );
}
