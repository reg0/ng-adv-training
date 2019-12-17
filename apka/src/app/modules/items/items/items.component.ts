import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/utils/models';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  data$: Observable<ItemModel[]>;

  constructor(private items: ItemsService) { }

  ngOnInit() {
    this.data$ = this.items.fetch();
  }

}
