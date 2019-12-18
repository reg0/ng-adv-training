import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap, ApplicationRef } from '@angular/core';

import { ContactCardComponent } from './contact-card/contact-card.component';
import { FormsModule } from "@angular/forms";
import { createCustomElement } from "@angular/elements";
@NgModule({
  declarations: [
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  entryComponents: [ContactCardComponent],
  providers: [],
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
    const el = createCustomElement(ContactCardComponent, {
      injector: this.injector
    });

    customElements.define('y-contact-card', el);
  }

  constructor(private injector: Injector) {
  }
}
