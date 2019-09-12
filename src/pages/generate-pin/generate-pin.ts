import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';


/**
 * Generated class for the GeneratePinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generate-pin',
  templateUrl: 'generate-pin.html',
})
export class GeneratePinPage {

  phoneNumber: any = '';
  countryCode: any = '';
  result: any;
  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl:AlertController) {
  }

  

  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    console.log('ionViewDidLoad GeneratePinPage');
  }

  sendPin(msisdn) {
    if (msisdn) {
      const appVerifier = this.recaptchaVerifier;
      const phoneNumberString = "+" + msisdn;
       debugger;
      firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
        .then( confirmationResult => {
          this.navCtrl.push('ValidatePinPage',{'phoneNumber':phoneNumberString,'confirmationResult':confirmationResult})
          // let prompt = this.alertCtrl.create({
          //   title: 'Enter the Confirmation code',
          //   inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
          //   buttons: [
          //     { text: 'Cancel',
          //       handler: data => { console.log('Cancel clicked'); }
          //     },
          //     { text: 'Send',
          //       handler: data => {
          //         confirmationResult.confirm(data.confirmationCode)
          //         .then((result)=> {
          //           this.navCtrl.push(HomePage);
          //           console.log(result.user);
          //           // ...
          //         }).catch(function (error) {
          //           alert(error);
          //           // User couldn't sign in (bad verification code?)
          //           // ...
          //         });
          //       }
          //     }
          //   ]
          // });
          // prompt.present();
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
      })
      .catch(function (error) {
        alert(error)
        console.error("SMS not sent", error);
      });
    //   (<any>window).FirebasePlugin.verifyPhoneNumber(msisdn, 30, function(credential) {
    //     alert("SMS sent successfully")
    //     console.log(credential);
    //     // ask user to input verificationCode:
    //     var verificationId = credential.verificationId;
      
    //     this.navCtrl.push('ValidatePinPage',{'verficationId':verificationId});
    // }, function(error) {
    //     console.error(error);
    // });

      // this.countryCode = '+' + msisdn.substring(0, 2);
      // this.phoneNumber = msisdn.substring(2, 13);
      // alert('Sending OTP to your mobile number');
      // let number = this.phoneNumber;
      // (<any>window).FirebasePlugin.verifyPhoneNumber(number, 60, (credential) => {
      //   console.log(credential);
      //   var verificationId = credential.verificationId;
      // }, (error) => {
      //   //this.eer = error;
      //   alert('Failed to send OTP. Try again');
      //   console.error(error);
      // });
    }
    else {
      alert("Please enter your MSISDN!");
    }
  }


}
