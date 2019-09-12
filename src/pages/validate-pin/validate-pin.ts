import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';
import { UtilsProvider } from '../../providers/utils/utils';


/**
 * Generated class for the ValidatePinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validate-pin',
  templateUrl: 'validate-pin.html',
})
export class ValidatePinPage {

  public confirmationResult: any;
  public phoneNumber: any;
  public pin: any;
  public uid: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public utils: UtilsProvider) {
    this.confirmationResult = this.navParams.get('confirmationResult');
    this.phoneNumber = this.navParams.get('phoneNumber');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidatePinPage');
  }

  validatePin(pin) {
    this.confirmationResult.confirm(pin)
      .then((result) => {
        this.navCtrl.setRoot(HomePage);
        console.log(result.user);
        if (result.user) {
          localStorage.setItem("user_logged_in", "true");
          if (firebase.auth().currentUser) {
            this.uid = firebase.auth().currentUser.uid;
            localStorage.setItem("uid", this.uid);
          }
        }
        // ...
      }).catch(function (error) {
        alert(error);
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }


}
