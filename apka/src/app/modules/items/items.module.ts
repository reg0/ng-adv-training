import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "ng-shared";

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ItemsComponent}
    ]),
  ]
})
export class ItemsModule { }
