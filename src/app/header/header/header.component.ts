import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
productCount = 0;
  constructor(public productService: ProductService, private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getCartDetails() {
    if (this.productService.getCartCount()) {
      this.router.navigateByUrl('/cart');
    } else {
      this.snackBar.open('No Item Added To Cart', 'Ok',  {
        duration: 2000,
        // here specify the position
        verticalPosition: 'top'
      });
    }
  }

}
