import React from 'react';
import style from './ReadArticle.module.css'

import Btnv1 from "../../common/Btnv1";
import {UserType} from "../../types/types";


type ReadArticleType = {
    title: string,
    img: string,
    desc: string,
    id: number,
    tags: Array<string>,
    url: string,
    user: UserType,
    published: string,
    body_html: string;

}
const ReadArticle = (props: ReadArticleType) => {


    return (
        <div className={style.article}>

            <h3>{props.title}</h3>
            <img src={props.img} alt=""/>
            <p>{props.desc}</p>
            <div className={style.inHtml} dangerouslySetInnerHTML={{__html: props.body_html}}/>
            <p>{props.published}</p>
            {props.tags.map((tag) => <Btnv1 key={tag} title={'#' + tag}/>)}
            <p>Author: <a target={'_blank'}
                          href={`https://github.com/${props.user.github_username}`}>
                            {props.user.name}</a>
            </p>

        </div>
    );
};

export default ReadArticle;