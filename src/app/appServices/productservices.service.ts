import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductservicesService {
  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  uploadProduct(products: any[]) {
    return this.http.put(
      'https://prouduct-update-default-rtdb.firebaseio.com/products.json',
      products,
      { headers: this.headers }
    );
  }

  fetchProduct() {
    return this.http.get(
      'https://prouduct-update-default-rtdb.firebaseio.com/products.json'
    );
  }

  getProductTitle() {
    return this.http.get(
      'https://prouduct-update-default-rtdb.firebaseio.com/productTitle.json'
    );
  }
}
