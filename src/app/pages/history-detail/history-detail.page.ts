import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.page.html',
  styleUrls: ['./history-detail.page.scss'],
})
export class HistoryDetailPage implements OnInit {
  tab = "available"
  constructor() { }

  ngOnInit() {
  }

  changeTab(tab) {
    this.tab = tab
  }
}
