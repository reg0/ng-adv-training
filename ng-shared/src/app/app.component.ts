import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from './utils/api';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-shared';
  data$: any;

  onClick(item) {
    alert(item.title);
  }

  constructor(private http: HttpClient) {
    this.data$ = this.http.get(Api.ITEMS_END_POINT).pipe(map((it: any) => it.data));
  }
}
