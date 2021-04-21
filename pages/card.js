import css from '../styles/common.module.scss';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';

const Card = ({title, about}) =>{
    return(
        <div className={css.fullcard}>
            <div className={css.fullTopBar}>
                <div className={css.cardIcons}>
                    <div className={css.cardRightIcon}><StarOutlineIcon /></div> <h3 className={css.starValue}>145</h3>
                </div>
                <div className={css.cardRight}>
                    <div className={css.cardRightIcon}><DeviceHubIcon /></div> <h3 className={css.shareValue}>200</h3>
                </div>
            </div>
            <div className={css.cardLine}></div>
            <div className={css.cardTitle}>{title}</div>
            <div className={css.cardAbout}>{about}</div>
            <div className={css.cardBelowLine}></div>
            <div className={css.cardBelow}>
                <h3 className={css.cardBelowText}>Open Repository</h3>
            </div>
        </div>
    )
}
export default Card;