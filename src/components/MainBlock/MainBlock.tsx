import React from 'react';
import style from './MainBlock.module.css'
import Topics from "./Topics/Topics";
import Articles from "./Articles/Articles";
import {Route, Routes, useLocation} from "react-router-dom";
import Board from "../Board";

const MainBlock = () => {
    // @ts-ignore
    let history=useLocation()
    return (
        <div className={style.main}>
            <input placeholder='search' type="text"/>
            <i className="bi bi-search"></i>
            <div>
                <Topics/>
                <Routes>
                    <Route path={'/'} element={<Articles/>}/>
                    <Route path={history.pathname} element={<Board/>}/>
                </Routes>

            </div>
        </div>
    );
};

export default MainBlock;