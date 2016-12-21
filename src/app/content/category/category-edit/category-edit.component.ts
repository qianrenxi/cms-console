import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'cms-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
  providers: [CategoryService]
})
export class CategoryEditComponent implements OnInit {
  cate: Category;
  cates: Category[];

  constructor(private cateService: CategoryService, private router: Router, private route: ActivatedRoute) { 
      
  }

  ngOnInit() {
    this.cate = new Category();

    let params = this.route.snapshot.params;
    if(params['id']){
      this.cateService.getCategory(+params['id']).then(cate => this.cate = cate);
    }

    this.cateService.getCategories().then(cates => this.cates = cates);
  }

  save() {
    //console.log(this.cate);
    this.cateService.save(this.cate).then(cate => {
      //this.cateService.getCategories().then(cates => console.log(cates));
      this.cate = cate;
      this.router.navigate(['/content/category']);
    });
  }

  goBack(){
    this.router.navigate(['/content/category']);
  }

}
