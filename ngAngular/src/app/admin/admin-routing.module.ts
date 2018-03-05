import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AuthGuardService} from '../auth-guard.service';
import {BookComponent} from '../book/book.component';
import {ProductComponent} from '../product/product.component';
import {AddbookComponent} from '../book/addbook.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          {path: 'book', component: BookComponent},
          {path: 'product', component: ProductComponent},
          {path: 'addbook', component: AddbookComponent},
          {path: '', component: AdminDashboardComponent}
        ],
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
