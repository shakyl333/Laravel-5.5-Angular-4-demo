import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {BookModule} from '../book/book.module';
import {ProductModule} from '../product/product.module';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BookModule,
    ProductModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminDashboardComponent]
})
export class AdminModule { }
