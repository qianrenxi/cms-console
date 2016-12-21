import { Component, OnInit } from '@angular/core';

import { Navigation } from './navigation';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'cms-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [NavigationService]
})
export class NavigationComponent implements OnInit {

  navs: Navigation[];

  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.navService.getNavigations().then(navs => this.navs = navs);
  }

}
