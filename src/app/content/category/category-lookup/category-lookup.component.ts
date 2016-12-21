import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TreeNode } from 'angular2-tree-component';

import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'cms-category-lookup',
  templateUrl: './category-lookup.component.html',
  styleUrls: ['./category-lookup.component.scss'],
  providers: [CategoryService]
})
export class CategoryLookupComponent implements OnInit {

  @Input() cates: Category[];
  @Input() cate: Category;
  @Output() cateChange: EventEmitter<Category> = new EventEmitter();

  //@Input() nn: string;
  //@Output() nnChange: EventEmitter<string> = new EventEmitter();

  selectedNode: TreeNode;

  focus: boolean = false;

  constructor(private cateService: CategoryService) { }

  ngOnInit() {
    if(!this.cates){
      this.cateService.getCategories().then(cates => this.cates = cates);
    }
  }

  onActivate($event) {
    this.selectedNode = $event.node;
    
    this.cate = <Category>this.selectedNode.data;
    //console.log(this.cate);
    this.cateChange.emit(this.cate);

    //this.nn="dfdfdf";
    //this.nnChange.emit(this.nn);
    this.close();
  }

  close() {
    this.focus = false;
  }

  open() {
    this.focus = true;
  }
}
