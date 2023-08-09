import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServesService {

  constructor(private http:HttpClient) { }


  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  gitProductByCategory(category: string) {
    return this.http.get(
      'https://fakestoreapi.com/products/category/' + category
    );
  }


  createProduct(model:any){
    return this.http.post('https://fakestoreapi.com/products',model)
  }

  UpdateProduct(item:any){
    return this.http.post('https://fakestoreapi.com/products/' , item)
  }
}
