import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input()
  data: any[];

  @Input()
  headers: string[];

  @ContentChild(TemplateRef, {static: true})
  contentsTpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
