import { Component, VERSION } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  loading: boolean = false;
  errorMessage;
  constructor(private productService: ProductService) {
    this.getProduct();
  }
  public getProduct() {
    this.loading = true;
    this.errorMessage = '';
    this.productService.getProduct().subscribe(
      response => {
        //next() callback
        console.log('response received');
        this.products = response;
      },
      error => {
        //error() callback
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      },
      () => {
        //complete() callback
        console.error('Request completed'); //This is actually not needed
        this.loading = false;
      }
    );
  }
}
