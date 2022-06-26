import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {getArticlesThunk} from "../../../store/reducers/ArticlesReducer";
import {AppRootType} from "../../../store/store";
import {ArticlesReducerTypes, initialArtType} from "../../../types/types";
import Article from "./Article/Article";
import style from './Articles.module.css'
import Btnv2 from "../../../common/Btnv2";

const Articles = () => {
    let dispatch = useDispatch()
    let data = useSelector<AppRootType, Array<ArticlesReducerTypes>>(state => state.ArticlesReducer.data)
    // @ts-ignore
    let tagR = useSelector<AppRootType, Array<initialArtType>>(state => state.ArticlesReducer.tag)
    useEffect(() => {

        // @ts-ignore
        dispatch(getArticlesThunk(data.length!==0&&data.length!==15?data.length:15,tagR))
    }, [])


    console.log(tagR)
    console.log(data)
    const getMore=()=>{
        let items=data.length+=10

        // @ts-ignore

        dispatch(getArticlesThunk(items,tagR))
    }
    return (
        <div className={style.articles}>
            {data.map((art) => <Article key={art.id}
                                        title={art.title} descript={art.description} id={art.id}
                                        coverimg={art.social_image} user={art.user}
                                        published={art.published_at} tagList={art.tag_list}/>)}
         <Btnv2 callBack={getMore} title={'Show more'}/>
        </div>
    );
};

export default Articles;