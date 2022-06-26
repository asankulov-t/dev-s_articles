import {ArticlesReducerTypes, initialArtType} from "../../types/types";
import {AnyAction, Dispatch} from "redux";
import {API} from "../../Api/Api";


let initial:initialArtType={
    data:[],
    tag:'',
    items:15
}
//actions

export const getArticlesAction=(data:Array<ArticlesReducerTypes>,tag:string)=>{
    return{
        type:"GET_ARTICLES",
        data:data,
        tag
    }as const
}
export const ErrorAction=(message:string)=>{
    return{
        type:"GET_ERROR",
        message
    } as const
}



//thunks
export const getArticlesThunk=(itemscount?:any,tag:string='')=>(dispatch:Dispatch)=>{
            API.getArticles(itemscount,tag).then((res)=>dispatch(getArticlesAction(res.data,tag)))


}

//types
export type GetArticle=ReturnType<typeof getArticlesAction>
export type ErrorArticle=ReturnType<typeof ErrorAction>

type actionTypes=GetArticle|ErrorArticle
export const ArticlesReducer=(state=initial,action:actionTypes)=>{
    switch (action.type) {
        case "GET_ARTICLES":
            return {...state,
                    data: action.data,
                    tag:action.tag}
        default:return state
    }
}