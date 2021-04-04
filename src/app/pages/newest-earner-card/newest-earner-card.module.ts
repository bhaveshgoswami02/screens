import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewestEarnerCardPageRoutingModule } from './newest-earner-card-routing.module';

import { NewestEarnerCardPage } from './newest-earner-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewestEarnerCardPageRoutingModule
  ],
  declarations: [NewestEarnerCardPage]
})
export class NewestEarnerCardPageModule {}
