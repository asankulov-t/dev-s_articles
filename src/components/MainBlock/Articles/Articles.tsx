import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {getArticlesThunk} from "../../../store/reducers/ArticlesReducer";
import {AppRootType} from "../../../store/store";
import {ArticlesReducerTypes} from "../../../types/types";
import Article from "./Article/Article";
import style from './Articles.module.css'

const Articles = () => {
    let dispatch = useDispatch()
    useEffect(() => {

        // @ts-ignore
        dispatch(getArticlesThunk())
    }, [])

    let data = useSelector<AppRootType, Array<ArticlesReducerTypes>>(state => state.ArticlesReducer.data)
    return (
        <div className={style.articles}>
            {data.map((art) => <Article key={art.id}
                                                         title={art.title} descript={art.description} id={art.id}
                                                         coverimg={art.social_image} user={art.user}
                                                         published={art.published_at} tagList={art.tag_list}/>)}
        </div>
    );
};

export default Articles;