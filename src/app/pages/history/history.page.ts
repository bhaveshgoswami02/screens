import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  tab = "available"
  constructor() { }

  ngOnInit() {
  }

  changeTab(tab) {
    this.tab = tab
  }

}
