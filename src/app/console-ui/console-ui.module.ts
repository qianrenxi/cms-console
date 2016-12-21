import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleUiComponent } from './console-ui.component';
import { SimpleDataTableComponent } from './simple-data-table/simple-data-table.component';
import { SimpleTreeTableComponent } from './simple-tree-table/simple-tree-table.component';
import { SimpleTreeComponent } from './simple-tree/simple-tree.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConsoleUiComponent, SimpleDataTableComponent, SimpleTreeTableComponent, SimpleTreeComponent]
})
export class ConsoleUiModule { }
