import Page from '../components/base_page';
import React, {useEffect} from "react";
import css from '../styles/common.module.scss';
import { Octokit } from "@octokit/core";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../pages/card';
import classNames from 'classnames';
import projects from '../static/data/project_data.json';


const handleClick = (c) =>{
    if (process.browser) {
        var x, i;
        x = document.getElementsByClassName(`${css.cards}`);
        console.log(x.length);
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
            // console.log(x[i].className);
            RemoveClass(x[i], `${css.show}`);
            if(x[i] != null){
                var languageName = x[i].className.split(" ");
                var languageNameValue = languageName[0];
                if (languageNameValue == c || c == "all") {AddClass(x[i], `${css.show}`);}
                else if(c == "other"){
                    if(languageNameValue != "Swift" && languageNameValue!="CSS" && languageNameValue!="Java" && languageNameValue!= "JavaScript" && languageNameValue!= "Python")
                        AddClass(x[i], `${css.show}`);
                }
            }
        }
    

        // Show filtered elements
        function AddClass(element, name) {
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
        function RemoveClass(element, name) {
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

        //Add active class to the current control menu (highlight it)
        var menus = document.getElementsByClassName(`${css.filterMenu}`);
        for (var i = 0; i < menus.length; i++) {
            menus[i].addEventListener("click", function(){
                var current = document.getElementsByClassName(`${css.active}`);
                current[0].className = current[0].className.replace(`${css.active}`, "");
                this.className += " "+`${css.active}`;
            });
        }
    }
}

const Project = () => {
    return (
        <Page>
            <div className={css.overlay}>
                <div className={css.banner}>
                </div>
            </div>
            <h1 className={css.bannerTitle}>Projects</h1>
            {/* <div className={css.topMenus}> */}
                <div className={css.subTitle}>
                    <h4  className={css.underSubTitle}>Browse various permissively-licensed open-source projects</h4>
                    <hr />
                </div>
                
                <div className={css.filterCriteria}>
                    <div className={`${css.filterCriteriaText} ${css.filterMenu} ${css.active}`} onClick={() => {handleClick("all")}} >All</div>
                    <div className={`${css.filterCriteriaText} ${css.filterMenu}`} onClick={() => {handleClick("Python")}}>Python</div>
                    {/* <div className={`${css.filterCriteriaText} ${css.filterMenu}`} onClick={() => {handleClick("JavaScript")}}>Javascript</div> */}
                    <div className={`${css.filterCriteriaText} ${css.filterMenu}`} onClick={() => {handleClick("Java")}}>Java</div>
                    <div className={`${css.filterCriteriaText} ${css.filterMenu}`} onClick={() => {handleClick("Swift")}}>Swift</div>
                    <div className={`${css.filterCriteriaText} ${css.filterMenu}`} onClick={() => {handleClick("CSS")}}>CSS</div>
                    {/* <div className={`${css.filterCriteriaText} ${css.filterMenu}`} onClick={() => {handleClick("Ruby")}}>Ruby</div> */}
                    <div className={`${css.filterCriteriaText} ${css.filterMenu}`} onClick={() => {handleClick("other")}}>Other</div>
                </div>
                <hr className={css.projectStartLine}/>
            {/* </div> */}
            <div className={css.fullProjectsListCard}>
                {projects.data.map(({id,name,description,forks_count,watchers_count,language,html_url,fork}) => (
                    <>
                    {!fork ? 
                        <div className={`${language} ${css.show} ${css.cards}`}>
                            <div className={css.filterCard}>
                                    <Card Key={id} id={id} name={name} description={description} forks_count={forks_count} watchers_count={watchers_count} language={language} html_url={html_url} />
                            </div>
                        </div>
                    :null}
                    </>
                ))}
            </div>
        </Page>
    );
}

// export async function getStaticProps() {
//     const octokit = new Octokit({
//         auth: process.env.GITHUB_API_KEY,
//         });
//         const res = await octokit.request("/users/hacktoolkit/repos");
//         const projects = await res;
//         return {
//             props: { 
//                 projects,
//                 },
//         }
// }
export default Project;