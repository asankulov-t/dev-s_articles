import React from 'react';
import style from './btn.module.css';

type Btn2type={
    title:string,
    callBack?:()=>void
}
const Btnv2 = (props:Btn2type) => {
    return <button  className={style.secondBtn}
                    onClick={props.callBack}>{props.title}</button>
};

export default Btnv2;