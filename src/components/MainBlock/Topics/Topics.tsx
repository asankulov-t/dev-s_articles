import React, {useEffect, useState} from 'react';
import style from './Topics.module.css'
import Btnv1 from "../../../common/Btnv1";
import {useDispatch} from "react-redux";
import {getArticlesThunk} from "../../../store/reducers/ArticlesReducer";

type TeChnologiesType={
    id:number
    title:string
}

const Topics = () => {
    // useEffect(()=>{
    //     axios.get('https://dev.to/search/feed_content?per_page=10&page=0&class_name=Article&search_fields=react').then((res)=>console.log(res))
    // })

    let tehnologies:Array<TeChnologiesType>=[
        {id:1,title:'Flutter'},
        {id:2,title:'React Native'},
        {id:3,title:'React'},
        {id:4,title:'Redux'},
        {id:5,title:'CSS'},
        {id:6,title:'HTML'},
        {id:7,title:'Ios'},
        {id:8,title:'Devops'},
        {id:9,title:'Ubuntu'},
        {id:10,title:'Linux'},
        {id:11,title:'GitHub'},
        {id:12,title:'Redux-toolkit'},
        {id:13,title:'Redux-thunk'},
        {id:14,title:'JavaScript'},
        {id:15,title:'TypeScript'},
        {id:16,title:'Mobx'},
        {id:17,title:'Node'},
        {id:18,title:'Mongo db'},
        {id:19,title:'Express'},
        {id:20,title:'MERN'},
        {id:21,title:'Vue'},
        {id:22,title:'Angular'},
        {id:23,title:'Rest'},
        {id:24,title:'API'},
        {id:25,title:'Graph Ql'},
        {id:26,title:'Sass'},
        {id:27,title:'Bootstrap'},
        {id:28,title:'Material UI'},
        {id:29,title:'Next js'},
        {id:30,title:'Webdev'},
        {id:31,title:'Nuxt'},
        {id:32,title:'Mongoose'},
        {id:33,title:'CRUD'},
        ]
    let dispatch=useDispatch()
    function setTag(title:string) {
        let str=title.split(' ').join('').toLowerCase().replace(/[\+\-\#]/g, '')
        console.log(str)
        // @ts-ignore

        dispatch(getArticlesThunk(15,str))
    }
    return (
        <div>
            {/*<h3 className={style.title}>Top stories for you</h3>*/}
            <div className={style.topics}>
                {tehnologies.map((t)=><Btnv1 key={t.id} title={`#${t.title}`} callback={setTag}/>)}
                {/*<Btnv1 callback={setTag} title={'Flutter'}/>*/}
                {/*<Btnv1 callback={setTag} title={'React native'}/>*/}
                {/*<Btnv1 callback={setTag} title={'Ios'}/>*/}
                {/*<Btnv1 callback={setTag} title={'Android'}/>*/}
                {/*<Btnv1 callback={setTag} title={'Node'}/>*/}
                {/*<Btnv1 callback={setTag} title={'Mongo db'}/>*/}
                {/*<Btnv1 callback={setTag} title={'GitHub'}/>*/}
                {/*<Btnv1 callback={setTag} title={'mobx'}/>*/}
                {/*<Btnv1 callback={setTag} title={'devops'}/>*/}
                {/*<Btnv1 callback={setTag} title={'fullStack'}/>*/}
                {/*<Btnv1 callback={setTag} title={'redux#thunk'}/>*/}
                {/*<Btnv1 callback={setTag} title={'redux-toolkit'}/>*/}
            </div>
        </div>
    );
};

export default Topics;