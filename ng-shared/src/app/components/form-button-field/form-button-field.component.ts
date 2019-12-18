import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/utils/models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button-field',
  templateUrl: './form-button-field.component.html',
  styleUrls: ['./form-button-field.component.scss']
})
export class FormButtonFieldComponent implements OnInit {
  form: FormGroup;
  config: FieldConfig;

  constructor() { }

  ngOnInit() {
  }

}
