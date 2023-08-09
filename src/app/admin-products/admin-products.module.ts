import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';

@NgModule({
  declarations: [AdminProductsComponent],
  imports: [CommonModule, SharedModule],
})
export class AdminProductsModule {}
