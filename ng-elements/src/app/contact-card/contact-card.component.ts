import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  template: `
    <div>
        hello {{name}}
        <input [(ngModel)]="phone" />
        <button (click)="more.emit({name:name, phone:phone})">more</button>
    </div>
  `,
  styles: []
})
export class ContactCardComponent implements OnInit {

  @Input() name;
  @Input() phone;
  @Output() more = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
