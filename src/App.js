import s from './App.module.css';
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import c from "./components/Content/Content.module.css";

const App = (props) => {
    return (
        <div className={s.App}>
            <Header/>
            <main className={c.main}>
                <div className={`${s.container} ${s.main_block}`}>
                    <Sidebar/>
                    <Content/>
                </div>
            </main>
        </div>
    );
}

export default App;
