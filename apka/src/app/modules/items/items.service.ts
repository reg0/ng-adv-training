import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServiceModel, ItemModel, HttpResponseModel } from 'src/app/utils/models';
import { Observable } from "rxjs";
import { Api } from 'src/app/utils/api';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ItemsService implements HttpServiceModel {
    constructor(private httpClient: HttpClient) { }

    fetch(filters?: { [key: string]: any; }): Observable<ItemModel[]> {
        return this.httpClient.get(Api.ITEMS_END_POINT).pipe(map((it: HttpResponseModel) => it.data));
    }
    get(id: number): Observable<any> {
        throw new Error("Method not implemented.");
    }
    add(item: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    update(item: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    remove(id: number): Observable<any> {
        throw new Error("Method not implemented.");
    }

}
