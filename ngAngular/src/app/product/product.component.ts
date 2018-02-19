import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataInvalid = false;
  formErrors = [];
  formSubmitting = false;

  constructor(productService: ProductService) { }

  ngOnInit() {
    this.productService.getBooks()
      .subscribe(data => {
        this.products = data;
      }, (err: HttpErrorResponse) => {
          this.dataInvalid = true;
          this.formSubmitting = false;
          if(err.error instanceof Error){
            this.formErrors.push(err.error.message);
          }
          else{

          }
        }
      )
  }

}



export class BookComponent implements OnInit {

 

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(data => {
        this.books = data;
      }, (err: HttpErrorResponse) => {
        this.dataInvalid = true;
        this.formSubmitting = false;
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          this.formErrors.push(err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          if (err.status === 0) {
            this.formErrors.push('please check your backend server.');
          } else {
            const errors = err.error;
            const items = [];
            for (const key in errors) {
              if (errors.hasOwnProperty(key)) {
                items.push(errors[key]);
              }
            }
            for (const k in items[1]) {
              if (items[1].hasOwnProperty(k)) {
                this.formErrors.push(items[1][k][0]);
              }
            }
          }
        }
      });
  }

}
