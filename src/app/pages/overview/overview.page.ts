import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SizeModalPage } from '../size-modal/size-modal.page';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentSizeModal() {
    const modal = await this.modalController.create({
      component: SizeModalPage,
      cssClass: 'size-modal'
    });
    return await modal.present();
  }


}
