import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor( private http:HttpClient) { }

  creartNewCart(model:any){
    return this.http.post('https://fakestoreapi.com/carts',model)
  }
}
