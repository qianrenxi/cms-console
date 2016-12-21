import { Injectable } from '@angular/core';

import { Navigation } from './navigation';
import { NAVS } from './mock-navigations';

@Injectable()
export class NavigationService {

  constructor() { }

  getNavigations(): Promise<Navigation[]> {
    return Promise.resolve(NAVS);
  }
}
