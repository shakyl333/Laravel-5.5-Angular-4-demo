import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from './book.service';
import {Book} from './book';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  bookForm: FormGroup;
  books: Book;
  dataInvalid = false;
  formErrors = [];
  formSubmitting = false;

  constructor(public bookService: BookService, public router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.bookForm = this.fb.group({
      author: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  ngOnInit() {
    
  }

  get author() {
    return this.bookForm.get('author');
  }

  get description() {
    return this.bookForm.get('description');
  }

  addbook() {
    this.formErrors = [];
    this.formSubmitting = true;
    this.bookService.addBook(this.bookForm.value).subscribe((data) => {
        this.formSubmitting = false;
        this.books = data;
        console.log('addbooks');
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = 'admin/book';
        // Redirect the user
        this.router.navigate([redirect]);
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