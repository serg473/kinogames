import c from './Content.module.css'
import News from "./News/News";
import Footer from "./Footer/Footer";
import DataInformation from "./DataInformation/DataInformation";
import Home from "./Home/Home";
import {Route, Routes} from "react-router-dom";

const Content = (props) => {
    debugger;
    return (
        <div className={c.Content}>
                <Footer/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route  path='/films' element={ <DataInformation dispatch = {props.dispatch} store = {props.state.data.dataFilmsItems.genre}/>}/>
                </Routes>
        </div>
    )
}

export default Content;