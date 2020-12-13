import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.fetchProductList();
  }

  fetchProductList() {
    this.products = this.productService.getProductsList();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.fetchProductList();
        },
        error => console.log(error));
  }

  productDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateEmployee(product: Product){
    this.router.navigate(['update', product]);
  }
}
