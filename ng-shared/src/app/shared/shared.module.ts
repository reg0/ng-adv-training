import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { FormGeneratorComponent } from '../components/form-generator/form-generator.component';



@NgModule({
  declarations: [DataGridComponent, FormGeneratorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DataGridComponent,
    FormGeneratorComponent,
  ],
})
export class SharedModule { }
