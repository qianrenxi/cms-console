import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'cms-simple-tree',
  templateUrl: './simple-tree.component.html',
  styleUrls: ['./simple-tree.component.scss']
})
export class SimpleTreeComponent implements OnInit {

  @Input() roots: any[];

  constructor() { }

  ngOnInit() {
  }

}
