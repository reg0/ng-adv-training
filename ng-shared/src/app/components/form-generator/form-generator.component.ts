import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FieldConfig } from 'src/app/utils/models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {

  @Input()
  formConfig: FieldConfig[];
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges({formConfig: { currentValue }}: SimpleChanges) {
    if (currentValue) {
      this.createForm(currentValue);
    }
  }

  createForm(formConfig: FieldConfig[]) {
    formConfig
      .filter(it => !['button', 'submit'].includes(it.type))
      .forEach(fieldConfig => {
        this.form.addControl(fieldConfig.name, this.fb.control(fieldConfig.value));
      });
  }

  ngOnInit() {
    this.form = this.fb.group({});
  }

}
