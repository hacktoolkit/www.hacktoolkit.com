import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import css from '../styles/common.module.scss';

const Features = ({icon, title, detail}) =>{
    return(
    <div className={css.featureCardHolder}>
                    <div>{icon}</div>
                    <div className={css.spacer}></div>
                    <h4>{title}</h4>
                    <div className={css.spacer}></div>
                    <p className={css.featureDetail}>{detail}</p>

                </div>
    );
}
export default Features;