import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowSomeLovePage } from './show-some-love.page';

const routes: Routes = [
  {
    path: '',
    component: ShowSomeLovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowSomeLovePageRoutingModule {}
