import nb from './Navbar.module.css'
import DropDownMenu from "./dropDownMenu/dropDownMenu";
const Navbar = (props) => {
    return (
        <nav className={nb.nav}>
            <DropDownMenu  />
        </nav>
    )
}
export default Navbar;