import css from '../styles/common.module.scss';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import GitHubIcon from '@material-ui/icons/GitHub';

const Card = ( {id,name,description ,forks_count ,watchers_count ,language ,html_url} ) =>{
    return(
        <div className={css.fullcard}>
            <div className={css.fullTopBar}>
                <div className={css.cardIcons}>
                    <div className={css.cardRightIcon}><StarOutlineIcon /></div> <h3 className={css.starValue}>{watchers_count}</h3>
                </div>
                <div className={css.programingLangauge}>
                {language}
                </div>
                <div className={css.cardRight}>
                    <div className={css.cardRightIcon}><DeviceHubIcon /></div> <h3 className={css.shareValue}>{forks_count}</h3>
                </div>
            </div>
            <div className={css.cardLine}></div>
            <div className={css.cardTitle}>{name}</div>
            <div className={css.cardAbout}>{description}</div>
            <div className={css.cardBelowLine}></div>
            <div className={css.cardBelow}>
                <h3 className={css.cardBelowText}><a href={html_url} target="_blank"> <GitHubIcon className={css.gitIcon} title="open" /> </a></h3>
            </div>
        </div>
    )
}
export default Card;