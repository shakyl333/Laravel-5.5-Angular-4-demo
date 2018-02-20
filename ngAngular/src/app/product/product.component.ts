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

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
      }, (err: HttpErrorResponse) => {
          this.dataInvalid = true;
          this.formSubmitting = false;
          if(err.error instanceof Error){
            this.formErrors.push(err.error.message);
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
      )
  }

}


