import React from 'react';
import style from './Article.module.css'
import {ReadType, UserType} from "../../../../types/types";
import Btnv1 from "../../../../common/Btnv1";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../../../store/store";
import {Link, NavLink} from "react-router-dom";
import {getCurrentArticleThunk} from "../../../../store/reducers/ReadReducer";

type ArticleTypes={
    id:number,
    title:string,
    descript:string,
    coverimg:string,
    user:UserType,
    published:string,
    tagList:Array<string>
}

const Article = (props:ArticleTypes) => {

    return (

            <div  className={style.article}>
                <div>
                    <Link  className={style.link} to={props.id+''}>
                    <h3 className={style.title}>{props.title}</h3>
                    <p className={style.desc}>{props.descript}</p>
                    </Link>
                    <div className={style.articleFooter}>
                        <p>{props.published}</p>
                        {props.tagList.map((tag)=><Btnv1 key={tag} title={'#'+tag}/>)}
                    </div>

                    <div>
                        <p>Posted by: <a  href={`https://github.com/${props.user.github_username}`}>{props.user.github_username}</a></p>
                    </div>
                </div>
                <div>
                    <img src={props.coverimg} alt=""/>
                </div>
            </div>

    );
};

export default Article;