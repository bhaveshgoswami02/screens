import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewInShopPageRoutingModule } from './new-in-shop-routing.module';

import { NewInShopPage } from './new-in-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewInShopPageRoutingModule
  ],
  declarations: [NewInShopPage]
})
export class NewInShopPageModule {}
