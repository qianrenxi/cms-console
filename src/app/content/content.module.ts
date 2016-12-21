import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TreeModule } from 'angular2-tree-component';

import { ContentRoutingModule } from './content-routing.module';

import { ContentComponent } from './content.component';
import { CategoryComponent } from './category/category.component';
import { ArticleComponent } from './article/article.component';
import { CategoryItemComponent } from './category/category-item/category-item.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryLookupComponent } from './category/category-lookup/category-lookup.component';
import { ArticleEditComponent } from './article/article-edit/article-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    
    TreeModule,

    ContentRoutingModule
  ],
  declarations: [ContentComponent, CategoryComponent, ArticleComponent, CategoryItemComponent, CategoryListComponent, CategoryEditComponent, CategoryLookupComponent, ArticleEditComponent]
})
export class ContentModule { }
