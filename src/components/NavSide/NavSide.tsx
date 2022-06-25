import React from 'react';
import style from './NavSide.module.css'
import {NavLink} from "react-router-dom";

const NavSide = () => {
    return (
        <div className={style.sideBlock}>
            <h1 className={style.title}>Devoloper's articles</h1>
            <nav>
                <ul>
                    <li><NavLink to="/"><i className="bi bi-house"></i>Top Articles</NavLink></li>
                    <li><NavLink to="/react"><i className="bi bi-filetype-jsx"></i>React </NavLink></li>
                    <li><NavLink to="/js"><i className="bi bi-filetype-js"></i>JavaScript</NavLink></li>
                    <li><NavLink to="/redux"><i className="bi bi-code-square"></i>Redux</NavLink></li>
                    <li><NavLink to="/redux-thunk"><i className="bi bi-code-square"></i>Redux-thunk</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavSide;