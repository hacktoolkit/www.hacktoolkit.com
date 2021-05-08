import teamcss from '../styles/teams.module.scss';
import GitHubIcon from '@material-ui/icons/GitHub';

const myNewLoader = ({ src, width, quality }) => {
    return `https://avatars.githubusercontent.com/${src}?w=${width}&q=${
        quality || 75
    }`;
};

const Team = ({ key, name, url, image, type, admin }) => {
    return (
        <div className={teamcss.teamColumn}>
            <div className={teamcss.teamCard}>
                <img src={image} alt="team" className={teamcss.teamImage} />
                <div className={teamcss.teamContainer}>
                    <h2 className={teamcss.teamFullName}>{name}</h2>
                    <p>
                        <button className={teamcss.teamButton}>
                            <a
                                className={teamcss.link}
                                href={url}
                                target="_blank"
                            >
                                <GitHubIcon />
                            </a>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Team;
