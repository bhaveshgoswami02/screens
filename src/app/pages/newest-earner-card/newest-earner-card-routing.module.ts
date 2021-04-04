import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewestEarnerCardPage } from './newest-earner-card.page';

const routes: Routes = [
  {
    path: '',
    component: NewestEarnerCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewestEarnerCardPageRoutingModule {}
