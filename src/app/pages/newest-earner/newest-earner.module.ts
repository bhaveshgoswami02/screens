import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewestEarnerPageRoutingModule } from './newest-earner-routing.module';

import { NewestEarnerPage } from './newest-earner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewestEarnerPageRoutingModule
  ],
  declarations: [NewestEarnerPage]
})
export class NewestEarnerPageModule {}
