import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-elements';
  @ViewChild('container', {static: true}) container;

  add(data) {
    this.container.nativeElement.innerHTML += `<y-contact-card name="${data.name}"></y-contact-card>`
  }
}
