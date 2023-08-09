import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  total: any = 0;
  success: boolean = false;
  constructor(private services: CartsService) {}

  ngOnInit(): void {
    this.getCartPrduct();
  }

  getCartPrduct() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();
    // console.log(this.cartProducts);
  }

  plusAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  minsAmount(index: number) {
    if (this.cartProducts[index].quantity > 0) {
      this.cartProducts[index].quantity--;
      this.getCartTotal();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }

  detectChange() {
    if (this.total >= 0) {
      this.getCartTotal();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }

  deleteProdect(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  getCartTotal() {
    this.total = 0;
    for (let it in this.cartProducts) {
      this.total +=
        this.cartProducts[it].item.price * this.cartProducts[it].quantity;
    }
  }

  addcart() {
    let products = this.cartProducts.map((item) => {
      return {
        productId: item.item.id,
        quantity: item.quantity,
      };
    });
    let Model = {
      userId: 5,
      date: new Date(),
      products: [this.cartProducts],
    };
    this.services.creartNewCart(Model).subscribe((res) => {
      this.success = true;
      this.clearCart();
    });
    // console.log(Model);
  }
}
