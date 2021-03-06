import { Observable } from 'rxjs';

export interface HttpServiceModel {
    fetch(filters?: { [key: string]: any }): Observable<any>;
    get(id: string): Observable<any>;
    add(item): Observable<any>;
    update(item): Observable<any>;
    remove(id: number): Observable<any>;
}

export interface HttpResponseModel {
    ok: boolean;
    data: any[];
    total: number;
    info: string;
    error: string;
}

export interface AuthServiceInterface {
    logged(): void;
    logIn(formData: { username, password }): void;
    logOut(): void;
}

export interface AuthDataModel {
    username: string;
    password: string;
}

export interface ItemModel {
    id?: number;
    category: string;
    imgSrc: string;
    price: number;
    title: string;
}

export interface ItemsStateModel {
    readonly data: ItemModel[];
    readonly loading: boolean;
}

export interface CartItemModel extends ItemModel {
    count: number;
}

export interface CartState {
    readonly data: CartItemModel[];
    readonly loading: boolean;
}

export interface DataGridItemModel {
    key: string;
    type?: string;
    header?: string;
    access?: string;
}

export class FieldTypes {
    static INPUT = 'input';
    static IMAGE = 'img';
    static BUTTON = 'button';
}
export class WorkerFieldTypes {
    static NAME = 'name';
    static PHONE = 'phone';
    static CATEGORY = 'category';
}

export class WorkerModel {
    constructor(
        public id: number = null,
        public name: string,
        public phone: number,
        public category: string = 'sales') { }
}

export interface Message {
    username?: string;
    clientX?: number;
    clientY?: number;
    size?: number;
    action?: string;
    type?: string;
}

export interface FieldConfig {
    name: string;
    type: string;
    label: string;
    value?: string;
    placeholder?: string;
    options?: string[];
    validation?: Object[]
}

export class FilterTypes {
    static TITLE = 'title';
    static PRICE_FROM = 'priceFrom';
    static CATEGORY = 'category';
    static CURRENT_PAGE = 'currentPage';
    static ITEMS_PER_PAGE = 'itemsPerPage';
}

export interface ItemsFiltersModel {
    title?: string;
    priceFrom?: number;
    category?: string;
    currentPage: number;
    itemsPerPage: number;
}

export class ItemsFilters {
    constructor(
        public title = '',
        public priceFrom = 0,
        public category = '',
        public currentPage = 1,
        public itemsPerPage = 5) {
    }
}
