import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SizeModalPage } from './size-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SizeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SizeModalPageRoutingModule {}
