import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Article } from '../article';
import { ArticleService } from '../article.service';
//import { Category } from '../../category/category';
//import { CategoryService } from '../../category/category.service';

@Component({
  selector: 'cms-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {
  article: Article;

  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.article = new Article();
    
    let params = this.route.snapshot.params;
    if(params['id']){
      this.articleService.getArticle(+params['id']).then(article => this.article = article);
    }
  }

  save() {
    this.articleService.save(this.article).then(article => {this.article = article;this.goList();});

    
  }

  goList() {
    this.router.navigate(['/content/article']);
  }
}
