import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewInShopPage } from './new-in-shop.page';

const routes: Routes = [
  {
    path: '',
    component: NewInShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewInShopPageRoutingModule {}
