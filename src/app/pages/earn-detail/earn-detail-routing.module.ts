import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarnDetailPage } from './earn-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EarnDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarnDetailPageRoutingModule {}
