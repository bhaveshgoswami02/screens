import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowSomeLovePageRoutingModule } from './show-some-love-routing.module';

import { ShowSomeLovePage } from './show-some-love.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowSomeLovePageRoutingModule
  ],
  declarations: [ShowSomeLovePage]
})
export class ShowSomeLovePageModule {}
