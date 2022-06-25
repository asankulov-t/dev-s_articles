import React from 'react';
import style from './ReadArticle.module.css'

import Btnv1 from "../../common/Btnv1";
import {ReadType, UserType} from "../../types/types";
import {useSelector} from "react-redux";
import {AppRootType} from "../../store/store";
import Markdown from "markdown-to-jsx";

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
    body_markdown: string,

}
const ReadArticle = (props:ReadArticleType) => {


    return (
      <div>

            <h3>{props.title}</h3>
            <img src={props.img} alt=""/>
            <p>{props.desc}</p>
          <div dangerouslySetInnerHTML={{ __html: props.body_html}} />
            <Markdown >{props.body_markdown}</Markdown>
            <p>{props.published}</p>
            {props.tags.map((tag) => <Btnv1 key={tag} title={'#' + tag}/>)}
            <p>Author: <a target={'_blank'}
                          href={`https://github.com/${props.user.github_username}`}>{props.user.name}</a></p>

        </div>
    );
};

export default ReadArticle;