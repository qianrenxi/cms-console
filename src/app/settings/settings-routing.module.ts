import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  {
      path: 'navigation',
      component: NavigationComponent,
      data: {
          title: '栏目设置'
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }

export const routedComponents = [SettingsComponent];