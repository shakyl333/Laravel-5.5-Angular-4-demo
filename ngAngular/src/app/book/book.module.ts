import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookComponent} from './book.component';
import {AddbookComponent} from './addbook.component';
import {BookService} from './book.service';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookComponent,
    AddbookComponent
  ],
  providers: [BookService]
})
export class BookModule { }
