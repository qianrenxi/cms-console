import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'cms-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  articles: Article[];
  article: Article = new Article();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().then(articles => this.articles = articles);
  }

  getList(){

  }

}
