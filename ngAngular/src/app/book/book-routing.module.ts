import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../auth-guard.service';
import {BookComponent} from '../book/book.component';
import {AddbookComponent} from '../book/addbook.component';

const bookRoutes: Routes = [
  {
    path: 'addbook',
    component: AddbookComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(bookRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookRoutingModule {
}
