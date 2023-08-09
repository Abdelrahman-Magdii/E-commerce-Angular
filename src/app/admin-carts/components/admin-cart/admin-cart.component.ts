import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products/serves/products.service';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.css'],
})
export class AdminCartComponent implements OnInit {
  constructor(private services: ServiceService, private build: FormBuilder,private serv:ProductsService) {}
  
  carts: any[] = [];
  products:any[]=[]
  total=0
  form!: FormGroup;
  detales:any;
  loading: boolean = false
  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end: [''],
    });
    this.getAllCarts();
  }

  getAllCarts() {
    this.loading=true
    this.services.getAllCarts().subscribe((res: any) => {
      this.carts = res;
      this.loading=false
    });
  }

  ApplyFilter(){
    let date=this.form.value
    this.services.getAllCarts(date).subscribe((res: any) => {
      this.carts = res;
    });
  }

  deletcart(id:number){
    this.services.getDeletCarts(id).subscribe((res: any) => {
      this.getAllCarts()
      alert("Success Delet");
    })

  }

  view(index:number){
    this.products=[]
    this.detales=this.carts[index]
    for(let x in this.detales.products){
      this.serv.getProductsById(this.detales.products[x].productId).subscribe((res: any) => {
        this.products.push({item:res,quantity:this.detales.products[x].quantity});
      })
    }
    // console.log(this.detales)
  }
}
