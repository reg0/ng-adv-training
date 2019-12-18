import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from 'src/app/utils/models';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {

  @Input()
  formConfig: FieldConfig[];

  constructor() { }

  ngOnInit() {
  }

}
