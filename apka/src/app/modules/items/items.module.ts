import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ItemsComponent}
    ]),
  ]
})
export class ItemsModule { }
