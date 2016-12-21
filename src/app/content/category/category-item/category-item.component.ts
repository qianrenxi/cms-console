import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../category';

@Component({
  selector: 'cms-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() cate: Category

  constructor() { }

  ngOnInit() {
  }

}
