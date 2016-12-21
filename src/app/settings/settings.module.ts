import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  declarations: [SettingsComponent, NavigationComponent]
})
export class SettingsModule { }
