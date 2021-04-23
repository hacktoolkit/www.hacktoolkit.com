import Page from '../components/base_page';
import React, {useEffect} from "react";
import css from '../styles/common.module.scss';
import { Octokit } from "@octokit/core";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../pages/card';
import classNames from 'classnames';

const handleClick = (c) =>{
    if (process.browser) {
        console.log(c);
        var x, i;
        x = document.getElementsByClassName(`${css.cards}`);
        console.log(x.length);
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
            // console.log(x[i].className);
            w3RemoveClass(x[i], `${css.show}`);
            if(x[i] != null){
                var languageName = x[i].className.split(" ");
                var languageNameValue = languageName[0];
                if (languageNameValue == c || c == "all") w3AddClass(x[i], `${css.show}`);
            }
        }
    

        // Show filtered elements
        function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(".");
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
        arr2 = name.split(".");
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

const Project = ({projects}) => {
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
                <div className={css.filterCriteriaText} onClick={() => {handleClick("JavaScript")}}>Javascript</div>
                <div className={css.filterCriteriaText} onClick={() => {handleClick("Java")}}>Java</div>
                <div className={css.filterCriteriaText} onClick={() => {handleClick("CSS")}}>CSS</div>
                <div className={css.filterCriteriaText} onClick={() => {handleClick("Ruby")}}>Ruby</div>
            </div>
            <hr className={css.projectStartLine}/>
            <div className={css.fullProjectsListCard}>
                {projects.data.map(({id,name,description,forks_count,watchers_count,language,html_url}) => (
                    <div className={`${language} ${css.show} ${css.cards}`}>
                        <div className={css.filterCard}>
                            {/* <div className={classNames(language ,css.show)}> */}
                                <Card Key={id} id={id} name={name} description={description} forks_count={forks_count} watchers_count={watchers_count} language={language} html_url={html_url} />
                            </div>
                    </div>
                ))}
            </div>
        </Page>
    );
}

export async function getStaticProps() {
    const octokit = new Octokit({
        auth: process.env.API_KEY,
        });
        const res = await octokit.request("/users/hacktoolkit/repos");
        const projects = await res;
        return {
            props: { 
                projects,
                },
        }
}
export default Project;