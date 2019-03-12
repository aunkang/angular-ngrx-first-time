import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [ItemComponent, CommonModule],
  providers: []
})
export class SharedModule { }
