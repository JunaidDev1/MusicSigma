import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabs: any = {
    tab0: "activeTab",
  };
  constructor(public navCtrl: NavController) {

  }

  playVideo() {
    this.navCtrl.push('PlayVideoPage');
  }

  activateTab(index) {
    this.tabs = {};
    for (var i = 0; i < 5; i++) {
      if (index == 0) {
        this.tabs.tab0 = "activeTab";
      }
      if (index == 1) {
        this.tabs.tab1 = "activeTab";
      }
      if (index == 2) {
        this.tabs.tab2 = "activeTab";
      }
      if (index == 3) {
        this.tabs.tab3 = "activeTab";
      }
      if(index==4) {
        this.tabs.tab4 = "activeTab";
      }
    }
  }

}
