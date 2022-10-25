import h from './Header.module.css'
import logo from './logo.png'
import Navbar from "./Navbar/Navbar";

const Header = () =>{
    return(
        <header className={h.header}>
            <div className={h.container}>
                <div className={h.header_item}>
                    <div className={h.header_logo}>
                        <img src={logo} alt={"logo"}/>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </header>
    )
}
export default Header;