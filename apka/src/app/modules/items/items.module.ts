import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "ng-shared";
import { MatButtonModule } from '@angular/material/button';
import { ItemDetailsComponent } from './item-details-component/item-details.component';

@NgModule({
  declarations: [ItemsComponent, ItemDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ItemsComponent, children: [
        {path: ':id', component: ItemDetailsComponent}
      ]},
    ]),
    MatButtonModule,
  ]
})
export class ItemsModule { }
