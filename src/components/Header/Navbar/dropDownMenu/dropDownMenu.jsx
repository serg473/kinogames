import nb from './dropDownMenu.module.css'
import {NavLink} from "react-router-dom";
const DropDownMenu = (props) => {

    return (
        <nav className={nb.nav}>
            <ul className={nb.nav_list}>
                <li><NavLink to='/'>Главная</NavLink></li>
                <li><NavLink to='/news'>Новости</NavLink></li>
                <li>
                    <NavLink to='/films'>Фильмы и сериалы
                        <ul className={nb.ul_level_2}>
                            <li className={nb.ul_item_2}><NavLink to='/films/comedy'>Комедия</NavLink></li>
                            <li className={nb.ul_item_2}><NavLink to='/films/triller'>Триллеры</NavLink></li>
                            <li className={nb.ul_item_2}><NavLink to='/films/detective'>Детектив</NavLink></li>
                            <li className={nb.ul_item_2}><NavLink to='/films/fantasy'>Фэнтези</NavLink></li>
                        </ul>
                    </NavLink>
                </li>
                <li><NavLink to="/contact">Контакты</NavLink></li>
            </ul>
        </nav>
    )
}
export default DropDownMenu;