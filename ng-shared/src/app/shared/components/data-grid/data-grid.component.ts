import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @ContentChild(TemplateRef, {static: true})
  contentsTpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
