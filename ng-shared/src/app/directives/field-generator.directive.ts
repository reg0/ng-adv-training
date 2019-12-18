import { Directive, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FieldConfig } from '../utils/models';
import { FormInputFieldComponent } from '../components/form-input-field/form-input-field.component';
import { FormSelectFieldComponent } from '../components/form-select-field/form-select-field.component';
import { FormButtonFieldComponent } from '../components/form-button-field/form-button-field.component';
import { FormGroup } from '@angular/forms';

const fields = {
  input: FormInputFieldComponent,
  select: FormSelectFieldComponent,
  button: FormButtonFieldComponent,
};

@Directive({
  selector: '[appFieldGenerator]'
})
export class FieldGeneratorDirective {
  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
  ) { }

  @Input() set appFieldGenerator({config, form}: {config: FieldConfig, form: FormGroup}) {
    const factory = this.resolver.resolveComponentFactory(fields[config.type]);
    const c = this.container.createComponent<any>(factory);
    c.instance.form = form;
    c.instance.config = config;
  }
}
