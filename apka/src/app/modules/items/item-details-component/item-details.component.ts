import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  data$: Observable<any>;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit() {
    this.data$ = this.route.params.pipe(
      switchMap(value => this.itemsService.get(value.id)),
    );
  }
}
