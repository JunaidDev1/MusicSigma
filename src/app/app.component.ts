import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { GeneratePinPage } from '../pages/generate-pin/generate-pin';
import { PreHomePage } from '../pages/pre-home/pre-home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GeneratePinPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Account', component: PreHomePage },
      { title: 'Logout', component: GeneratePinPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (localStorage.getItem("user_logged_in") == "true") {
        this.rootPage = HomePage;
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == 'Logout') {
      localStorage.clear();
      this.nav.setRoot(page.component);
    }
    else {
      this.nav.setRoot(page.component);
    }

  }
}
