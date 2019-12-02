import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productDetails: Product;
  constructor(public dialog: MatDialog, public productService: ProductService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productDetails = this.productService.productDetails;
  }

  showProductDetails() {
   const dilogRef = this.dialog.open(ProductDetailComponent,  {
      width: '550px',
    });
   dilogRef.componentInstance.productDetails = this.productDetails;

  }

  addToCart() {
    if (!this.productService.getCartCount()) {
      this.addedToCartShowSnackBar();
    }
    this.productService.setCartCount(1);
  }

  addedToCartShowSnackBar() {
    this.snackBar.open('Item added to cart', 'Ok',  {
      duration: 2000,
      // here specify the position
      verticalPosition: 'top'
    });
  }
}
