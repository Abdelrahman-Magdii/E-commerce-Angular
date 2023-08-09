import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getAllCarts(parm?:any){
    let params =new HttpParams()
    params=params.append("startDate",parm?.start).append("endDate",parm?.end);
    return this.http.get('https://fakestoreapi.com/carts',{params})
  }

  getDeletCarts(id:number){
    return this.http.delete('https://fakestoreapi.com/carts/'+id)
  }
}
