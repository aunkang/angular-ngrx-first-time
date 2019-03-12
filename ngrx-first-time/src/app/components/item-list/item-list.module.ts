import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list.component';
import { ItemComponent } from '../item/item.component';
import { SharedModule } from 'src/app/shared.module';


const route: Routes = [
  { path: '', component: ItemListComponent }
];

@NgModule({
  declarations: [ItemListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(route)
  ]
})
export class ItemListModule { }
