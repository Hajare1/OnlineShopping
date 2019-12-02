import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './shopping/product-list/product-list.component';
import { CartDetailsComponent } from './shopping/cart-details/cart-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProductListComponent},
  { path: 'cart', component: CartDetailsComponent},
  { path: '**',
    component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
