import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewestEarnerPage } from './newest-earner.page';

const routes: Routes = [
  {
    path: '',
    component: NewestEarnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewestEarnerPageRoutingModule {}
