import {ArticlesReducerTypes, initialArtType, initialReadType, ReadType, UserType} from "../../types/types";
import {Dispatch} from "redux";
import {API} from "../../Api/Api";




let initial:initialReadType={

}
//actions

export const getArticleAction=(data:ReadType)=>{
    return{
        type:"GET_CURRENT_ARTICLE",
        data,
    }as const
}
export const ErrorActionRead=(message:string)=>{
    console.log(message)
    return{
        type:"GET_ERROR_ARTICLE",
        message
    } as const
}


//thunks
export const getCurrentArticleThunk=(id:string)=>(dispatch:Dispatch)=>{
    try {
        API.getCurrentArticle(id).then((res)=>dispatch(getArticleAction(res.data)))
    }
    catch (e) {
        // @ts-ignore
        dispatch(ErrorActionRead(e.message))
    }

}

//types
export type GetArticle=ReturnType<typeof getArticleAction>
export type ErrorArticle=ReturnType<typeof ErrorActionRead>

type actionTypes=GetArticle|ErrorArticle
export const ReadReducer=(state=initial,action:actionTypes)=>{
    switch (action.type) {
        case "GET_CURRENT_ARTICLE":
            return {...state, data:action.data}
        default:return state
    }
}