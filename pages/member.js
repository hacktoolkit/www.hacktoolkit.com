import teamcss from '../styles/teams.module.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Member = ({login,html_url,avatar_url}) =>{
    return(
    <div className={teamcss.avator}>
        <div className={teamcss.avatorDetail}>
            <div className={teamcss.arrow}></div>
            <p className ={teamcss.name}>{login.charAt(0).toUpperCase() + login.slice(1)}</p>
            <p className={teamcss.title}> </p>
            <hr />
            <div className={teamcss.icons}>
            <a href={html_url} target="_blank">
                <GitHubIcon
                 />
            </a>
            </div>
            <br />
        </div>
        <img src = {avatar_url} className={teamcss.avatorImg} />                                    
    </div>
    )
}
export default Member;