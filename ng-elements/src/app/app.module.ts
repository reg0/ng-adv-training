import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { FormsModule } from "@angular/forms";
import { createCustomElement } from "@angular/elements";
@NgModule({
  declarations: [
    AppComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  entryComponents: [ContactCardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(ContactCardComponent, {
      injector: this.injector
    });

    customElements.define('y-contact-card', el);
  }
}
