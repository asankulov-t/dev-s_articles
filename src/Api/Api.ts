import axios from "axios";
import {ArticlesReducerTypes, ReadType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://dev.to/api/articles',
    // headers: {
    //     'X-Custom-Header': 'foobar',
    //     'api-key':'mYM7roJxuDBmWfv56Cs9o2N8',
    // }
});

export const API = {
    getArticles() {
        return instance.get<Array<ArticlesReducerTypes>>('/')
    },
    getCurrentArticle(id:string){
       return instance.get<ReadType>(id+'')
    }
}