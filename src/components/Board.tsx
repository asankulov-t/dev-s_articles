import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../store/store";
import {ReadType} from "../types/types";
import ReadArticle from "./ReadArticle/ReadArticle";
import {useLocation} from "react-router-dom";
import {getCurrentArticleThunk} from "../store/reducers/ReadReducer";


const Board = () => {
    let history=useLocation()
    let dispatch=useDispatch()
    useEffect(()=>{
            // @ts-ignore
            dispatch(getCurrentArticleThunk(history.pathname.slice(1)))
    },[])


    // @ts-ignore
    let data = useSelector<AppRootType,ReadType>(state => state.ReadReducer.data);
    console.log(data)
    return (
        <div>
            {data?<ReadArticle
                title={data.title}
                img={data.social_image}
                desc={data.description}
                id={data.id} tags={data.tags}
                url={data.url} user={data.user}
                published={data.published_at}
                body_html={data.body_html}
                />:<p>Error</p>}
        </div>
    );
};

export default Board;