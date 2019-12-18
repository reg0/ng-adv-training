import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/utils/models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-select-field',
  templateUrl: './form-select-field.component.html',
  styleUrls: ['./form-select-field.component.scss']
})
export class FormSelectFieldComponent implements OnInit {
  form: FormGroup;
  config: FieldConfig;

  constructor() { }

  ngOnInit() {
  }

}
