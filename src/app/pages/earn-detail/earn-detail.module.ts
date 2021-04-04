import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarnDetailPageRoutingModule } from './earn-detail-routing.module';

import { EarnDetailPage } from './earn-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarnDetailPageRoutingModule
  ],
  declarations: [EarnDetailPage]
})
export class EarnDetailPageModule {}
