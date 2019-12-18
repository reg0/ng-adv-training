import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { FormGeneratorComponent } from '../components/form-generator/form-generator.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DataGridComponent, FormGeneratorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    DataGridComponent,
    FormGeneratorComponent,
  ],
})
export class SharedModule { }
