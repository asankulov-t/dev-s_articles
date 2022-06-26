import React from 'react';
import style from './btn.module.css';
type btnType={
    title:string,
    callback?:(title:string)=>void
}
const Btnv1 = (props:btnType) => {
    return <button onClick={()=>props.callback&&props.callback(props.title)} className={style.v1}>{props.title}</button>
};

export default Btnv1;