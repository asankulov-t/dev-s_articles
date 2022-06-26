import axios from "axios";
import {ArticlesReducerTypes, ReadType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://dev.to/api/articles',
    // headers: {
    //     'X-Custom-Header': 'foobar',
    //     'api-key':'mYM7roJxuDBmWfv56Cs9o2N8',
    // }
});
//'?tag=redux&&top=50'
export const API = {
    getArticles(per_page:number=15,tag:string='') {
        return instance.get<Array<ArticlesReducerTypes>>(`?per_page=${per_page}&tag=${tag}&top=10`)
    },
    searchResult(){
        return instance.get<Array<ArticlesReducerTypes>>('/')
    },
    getCurrentArticle(id:string){
       return instance.get<ReadType>(id+'')
    }
}