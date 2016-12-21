import { Injectable } from '@angular/core';

import { Category } from './category';
import { CATEFORIES } from './mock-categories';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Promise<Category[]> {
    return Promise.resolve(CATEFORIES);
  }

  getCategory(id: number): Promise<Category> {
    return Promise.resolve(this.find(id, CATEFORIES));
  }

  save (cate: Category): Promise<Category>{
    if(cate.id){
      // update
    }else{
      // add
      cate.id = new Date().getTime();
      if(cate.parent && cate.parent.id){
        let parent = this.find(cate.parent.id, CATEFORIES);
        if(!parent.children){
          parent.children = [];
        }
        parent.children.push(cate);
      }else{
        CATEFORIES.push(cate);
      }
    }
    return Promise.resolve(cate);
  }

  private find(id: number, cates: Category[]): Category{
    let _cate: Category;
    cates.forEach((cate)=>{
      if(_cate){
        return _cate;
      }
      if(cate.id == id){
        _cate = cate;
      }
      if(!_cate && cate.children){
        _cate = this.find(id, cate.children);
      }
    });
    return _cate;
  }
}
