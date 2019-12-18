import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { FormGeneratorComponent } from '../components/form-generator/form-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonFieldComponent } from '../components/form-button-field/form-button-field.component';
import { FormInputFieldComponent } from '../components/form-input-field/form-input-field.component';
import { FormSelectFieldComponent } from '../components/form-select-field/form-select-field.component';
import { FieldGeneratorDirective } from '../directives/field-generator.directive';



@NgModule({
  declarations: [
    DataGridComponent,
    FormGeneratorComponent,
    FormButtonFieldComponent,
    FormInputFieldComponent,
    FormSelectFieldComponent,
    FieldGeneratorDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    DataGridComponent,
    FormGeneratorComponent,
    FormButtonFieldComponent,
    FormInputFieldComponent,
    FormSelectFieldComponent,
  ],
})
export class SharedModule { }
