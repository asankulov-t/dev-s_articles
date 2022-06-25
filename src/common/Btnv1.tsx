import React from 'react';
import style from './btn.module.css';
type btnType={
    title:string
}
const Btnv1 = (props:btnType) => {
    return <button className={style.v1}>{props.title}</button>
};

export default Btnv1;