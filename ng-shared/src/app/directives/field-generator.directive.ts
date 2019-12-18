import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appFieldGenerator]'
})
export class FieldGeneratorDirective {
  constructor() { }

  @Input() set appFieldGenerator(config) {
    debugger;
  }
  

}
