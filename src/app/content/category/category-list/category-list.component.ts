import { Component, OnInit, Input } from '@angular/core';

import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'cms-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  
  @Input() cates: Category[];

  constructor(private cateService: CategoryService) { }

  ngOnInit() {
    if(!this.cates){
      this.cateService.getCategories().then(cates => this.cates = cates);
    }
  }

  hasChildren(cate: Category): boolean {
    return cate.children && cate.children.length > 0;
  }
}
