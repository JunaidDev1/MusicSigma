import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeneratePinPage } from '../pages/generate-pin/generate-pin';
import { PreHomePage } from '../pages/pre-home/pre-home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsProvider } from '../providers/utils/utils';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCE1UzZMGBKfco60-NSVkjV4JGRt9-a0js",
  authDomain: "music-sigma.firebaseapp.com",
  databaseURL: "https://music-sigma.firebaseio.com",
  projectId: "music-sigma",
  storageBucket: "music-sigma.appspot.com",
  messagingSenderId: "141282296711",
  appId: "1:141282296711:web:4e62c32d6a09d45be50922"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PreHomePage,
    GeneratePinPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PreHomePage,
    GeneratePinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UtilsProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
