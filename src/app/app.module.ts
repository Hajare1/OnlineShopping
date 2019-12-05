import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';

import { MatSliderModule ,
         MatToolbarModule,
         MatCardModule,
         MatButtonModule,
         MatDialogModule,
         MatBadgeModule,
         MatIconModule,
         MatListModule,
         MatChipsModule,
         MatGridListModule,
         MatSnackBarModule,
         MatTooltipModule } from '@angular/material';
import { ProductListComponent } from './shopping/product-list/product-list.component';
import { ProductDetailComponent } from './shopping/product-detail/product-detail.component';
import { CartDetailsComponent } from './shopping/cart-details/cart-details.component';
import { FooterComponent } from './footer/footer.component';
import { RatingComponent } from './shopping/rating/rating.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartDetailsComponent,
    FooterComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatChipsModule,
    MatSnackBarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProductDetailComponent]
})
export class AppModule { }
