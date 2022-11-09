import c from './Content.module.css'
import News from "./News/News";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import {Route, Routes} from "react-router-dom";
import FilmsContainer from "./Films/FilmsContainer";


const Content = (props) => {
    return (
        <div className={c.Content}>
                <Footer/>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/news' element={<News />}/>
                    <Route path='/films' element={ <FilmsContainer/>}/>
                </Routes>
        </div>
    )
}

export default Content;