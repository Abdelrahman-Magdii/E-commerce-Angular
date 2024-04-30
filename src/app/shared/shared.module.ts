import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from '../products/components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsDetailsComponent } from '../products/components/products-details/products-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AllProductsComponent,
    SelectComponent,
    SpinnerComponent,
    ProductComponent,
    ProductsDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,    
    BrowserModule,
    HttpClientModule,
  ],

  exports: [
    HeaderComponent,
    SelectComponent,
    ProductComponent,
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent,
  ],
})
export class SharedModule {}
