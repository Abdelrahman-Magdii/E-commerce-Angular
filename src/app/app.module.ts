import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { CartsModule } from './carts/carts.module';
import { AdminCartsModule } from './admin-carts/admin-carts.module';
import { AdminProductsModule } from './admin-products/admin-products.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminCartsModule,
    CartsModule,
    AdminProductsModule,
    AdminProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
