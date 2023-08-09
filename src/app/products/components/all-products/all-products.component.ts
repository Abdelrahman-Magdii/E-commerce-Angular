import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../serves/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  Products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false; //!spinner
  cartProducts: any[] = [];

  constructor(private service: ProductsService) {}
  
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true; //!spinner
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.loading = false; //!spinner
        this.Products = res;
        // console.log(res);
      },
      (error) => {
        this.loading = false; //!spinner
        alert(error);
      }
    );
  }

  getCategories() {
    this.loading = true; //!spinner

    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.loading = false; //!spinner
        this.categories = res;
        // console.log(res);
      },
      (error) => {
        this.loading = false; //!spinner
        alert(error);
      }
    );
  }

  FilterCategores(event: any) {
    this.loading = true; //!spinner

    let value = event.target.value;

    if (value == 'all') {
      this.getProducts();
    } else {
      this.service.gitProductByCategory(value).subscribe((res: any) => {
        this.loading = false; //!spinner
        this.Products = res;
      });
    }
    // console.log(value)
  }

  addToCart(event: any) {
    // console.log(event);
    // localStorage.setItem('cart', JSON.stringify(event));
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(
        (item) => item.item.id == event.item.id
      );
      if (exist) {
        alert('product already added in your cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
