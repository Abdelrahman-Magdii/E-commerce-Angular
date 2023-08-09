import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AdminCartComponent } from './admin-carts/components/admin-cart/admin-cart.component';
import { AdminProductsComponent } from './admin-products/components/admin-products/admin-products.component';

const routes: Routes = [
  {path:'products',component:AllProductsComponent},
  {path:'details/:id',component:ProductsDetailsComponent},
  {path:'admincart',component:AdminCartComponent},
  {path:'adminproduct',component:AdminProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'**',redirectTo: 'products',pathMatch:'full'}
];

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
