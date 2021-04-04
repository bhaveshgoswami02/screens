import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SizeModalPageRoutingModule } from './size-modal-routing.module';

import { SizeModalPage } from './size-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SizeModalPageRoutingModule
  ],
  declarations: [SizeModalPage]
})
export class SizeModalPageModule {}
