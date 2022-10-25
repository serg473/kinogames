import nb from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className={nb.nav}>
            <ul className={nb.nav_list}>
                <li><NavLink to='/'>Главная</NavLink></li>
                <li><NavLink to='/news'>Новости</NavLink></li>
                <li><NavLink to='/films'>База игр</NavLink></li>
                <li><NavLink to="/contact">Контакты</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;