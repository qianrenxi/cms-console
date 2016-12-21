import { Injectable } from '@angular/core';

import { Http, URLSearchParams } from '@angular/http';

import { Article } from './article';
import { ARTICLES } from './mock-articles';

//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  getArticles(): Promise<Article[]> {
    //return Promise.resolve(ARTICLES);
    let params = new URLSearchParams();
    params.append("page", "1");
    return this.http.get("http://localhost:8083/api/article/list", {search: params})
    //return this.http.get("http://localhost:8083/api/article/list", {body: {page: 1}}) //get 请求不生效
            .toPromise()
            .then(response => response.json().content as Article[])
            .catch(this.error);
  }

  getArticle(id: number): Promise<Article> {
    //return Promise.resolve(ARTICLES.find(article => article.id == id));
    return this.http.get("http://localhost:8083/api/article/"+id)
            .toPromise()
            .then(response => response.json() as Article)
            .catch(this.error);
  }

  save(article: Article): Promise<Article> {
    //if(article.id){
      //update
    //}else{
      //article.id = new Date().getTime();
      //ARTICLES.push(article);
      return this.http.post("http://localhost:8083/api/article/save", article)
        .toPromise()
        .then(response => response.json() as Article)
        .catch(this.error);
    //}
    //return Promise.resolve(article);
  }

  private find(id: number): Article {
    return ARTICLES.find(article => article.id == id);
  }

  private error(){
    console.log("error")
  }
}
