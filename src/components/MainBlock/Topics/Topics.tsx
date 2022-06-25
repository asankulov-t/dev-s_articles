import React from 'react';
import style from './Topics.module.css'
import Btnv1 from "../../../common/Btnv1";
import Articles from "../Articles/Articles";
const Topics = () => {
    return (
        <div>
            <h3 className={style.title}>Top stories for you</h3>
            <div className={style.topics}>
                <Btnv1 title={'Flutter'}/>
                <Btnv1 title={'React native'}/>
                <Btnv1 title={'Ios'}/>
                <Btnv1 title={'Android'}/>
                <Btnv1 title={'Node js'}/>
                <Btnv1 title={'Mongo db'}/>
                <Btnv1 title={'GitHub'}/>
                <Btnv1 title={'Mobx'}/>
                <Btnv1 title={'devops'}/>
                <Btnv1 title={'fullStack'}/>
            </div>

        </div>
    );
};

export default Topics;