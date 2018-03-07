import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookComponent} from './book.component';
import {AddbookComponent} from './addbook.component';
import {BookService} from './book.service';
import { ReactiveFormsModule } from '@angular/forms';
import {BookRoutingModule} from './book-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookRoutingModule
  ],
  declarations: [
    BookComponent,
    AddbookComponent
  ],
  providers: [BookService]
})
export class BookModule { }
