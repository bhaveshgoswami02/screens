import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earn',
  templateUrl: './earn.page.html',
  styleUrls: ['./earn.page.scss'],
})
export class EarnPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  nextPage() {
    console.log("run")
    this.router.navigateByUrl("/earn-detail")
  }
}
