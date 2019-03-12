import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/shared.module';

const route: Routes = [
  { path: '', component: CartComponent }
];

@NgModule({
  declarations: [CartComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(route)
  ],
  exports: []
})
export class CartModule { }
