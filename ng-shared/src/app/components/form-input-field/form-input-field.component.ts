import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/utils/models';

@Component({
  selector: 'app-form-input-field',
  templateUrl: './form-input-field.component.html',
  styleUrls: ['./form-input-field.component.scss']
})
export class FormInputFieldComponent implements OnInit {
  form: FormGroup;
  config: FieldConfig;

  constructor() { }

  ngOnInit() {
  }

}
