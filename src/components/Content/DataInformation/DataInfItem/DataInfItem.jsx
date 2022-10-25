import di from './DataInfItem.module.css'
import n from "../../News/NewsItem/NewsItem.module.css";

const DataInfItem = (props) =>{

    return(
        <div className={di.news}>
            <a className={di.news} href={props.id}>
                <div className={di.img_block}>
                    <img src={props.preview} alt=""/>
                </div>
                <div title = {props.title} className={di.card_title}>{props.title}</div>
                <div className={di.card_title}>{props.dateYear}</div>
            </a>
        </div>
    )
}
export default DataInfItem;