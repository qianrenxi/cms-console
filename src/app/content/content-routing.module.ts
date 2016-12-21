import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';

import { ArticleComponent } from './article/article.component';
import { ArticleEditComponent } from './article/article-edit/article-edit.component';

const routes: Routes = [
  { path: '', component: ContentComponent, data: {title: '内容管理'} },
  {
      path: 'category',
      data: {
          title: '分类管理'
      },
      children: [
          {path: '', component: CategoryComponent, data: {title: "分类列表"}},
          {path: 'add', component:CategoryEditComponent, data: {title: '添加分类'}},
          {path: ':id/edit', component:CategoryEditComponent, data: {title: '编辑分类'}}
      ]
  },
  {
      path: 'article',
      data: {title: '文章管理'},
      children: [
          {path: '', component: ArticleComponent, data: {title: '文章列表'}},
          {path: 'add', component: ArticleEditComponent, data: {title: '添加文章'}},
          {path: ':id/edit', component: ArticleEditComponent, data: {title: '编辑文章'}}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule { }

export const routedComponents = [ContentComponent];