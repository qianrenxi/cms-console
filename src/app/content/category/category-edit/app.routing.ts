import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

//Layouts
import { FullLayoutComponent }      from './layouts/full-layout.component';

import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'CMS 管理控制台'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'settings',
                loadChildren: 'app/settings/settings.module#SettingsModule'
            },
            {
                path: 'content',
                loadChildren: 'app/content/content.module#ContentModule'
            },
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
