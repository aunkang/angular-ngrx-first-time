import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'item-list',
    loadChildren: './components/item-list/item-list.module#ItemListModule',
  },
  {
    path: 'cart',
    loadChildren: './components/cart/cart.module#CartModule',
  },
  {
    path: '',
    redirectTo: '/item-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
