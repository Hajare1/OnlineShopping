import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  productDetails: Product;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
   this.productDetails = this.productService.productDetails;
  }

  removeFromCart() {
    this.productService.setCartCount(0);
    this.router.navigateByUrl('/product-list');
  }
}
