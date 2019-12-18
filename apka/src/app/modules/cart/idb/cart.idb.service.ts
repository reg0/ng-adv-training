import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { CartItemModel } from "../../../utils/models";

enum Cart {
    DBName = 'CART_DB',
    ObjectStore = 'CART_ITEMS',
    ObjectKey = 'ITEMS'
}

interface CartDB extends DBSchema {
    [Cart.ObjectStore]: {
        key: string,
        value: CartItemModel[]
    }
}

@Injectable({
    providedIn: 'root'
})
export class CartIDBService {
    db: IDBPDatabase<CartDB>;

    async connectDB() {
        this.db = await openDB<CartDB>(Cart.DBName, 1, {
            upgrade(db) {
                db.createObjectStore(Cart.ObjectStore)
            }
        });
    }

    async getStorage(): Promise<CartItemModel[]> {
        await this.connectDB();
        return this.db.get(Cart.ObjectStore, Cart.ObjectKey);
    }

    updateStorage(payload): void {
        this.db.put(Cart.ObjectStore, payload, Cart.ObjectKey);
    }
}
