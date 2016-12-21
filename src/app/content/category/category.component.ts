import { Component, OnInit } from '@angular/core';

import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'cms-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  cates: Category[];

  constructor(private cateService: CategoryService) { }

  ngOnInit() {
    this.cateService.getCategories().then(cates => this.cates = cates);
  }

}
