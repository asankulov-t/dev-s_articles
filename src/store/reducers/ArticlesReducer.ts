import {ArticlesReducerTypes, initialArtType} from "../../types/types";
import {AnyAction, Dispatch} from "redux";
import {API} from "../../Api/Api";


let initial:initialArtType={
    data:[]
}
//actions

export const getArticlesAction=(data:Array<ArticlesReducerTypes>)=>{
    return{
        type:"GET_ARTICLES",
        data:data
    }as const
}
export const ErrorAction=(message:string)=>{
    return{
        type:"GET_ERROR",
        message
    } as const
}



//thunks
export const getArticlesThunk=(itemscount?:any)=>(dispatch:Dispatch)=>{
            API.getArticles(itemscount).then((res)=>dispatch(getArticlesAction(res.data)))


}

//types
export type GetArticle=ReturnType<typeof getArticlesAction>
export type ErrorArticle=ReturnType<typeof ErrorAction>

type actionTypes=GetArticle|ErrorArticle
export const ArticlesReducer=(state=initial,action:actionTypes)=>{
    switch (action.type) {
        case "GET_ARTICLES":
            return {...state, data: action.data}
        default:return state
    }
}