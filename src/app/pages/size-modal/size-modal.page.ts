import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-size-modal',
  templateUrl: './size-modal.page.html',
  styleUrls: ['./size-modal.page.scss'],
})
export class SizeModalPage implements OnInit {

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
