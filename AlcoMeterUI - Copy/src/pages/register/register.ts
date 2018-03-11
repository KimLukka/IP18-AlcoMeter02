import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  mail: any = ""; 
  pass: any = ""; 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register() {
    firebase.auth().createUserWithEmailAndPassword(this.mail, this.pass).then(function(response){
      alert("hello");
      this.nextPage(); 
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
}
