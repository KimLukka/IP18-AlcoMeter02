import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; 
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rs = RegisterPage; 
  user: string = ""; 
  pass: string = ""; 

  constructor(public navCtrl: NavController) {

  }
  nextPage(){
    console.log("nextPage worked!"); 
  }
  login(){
    firebase.auth().signInWithEmailAndPassword(this.user, this.pass).then(function(response){
      alert("hello");
      this.nextPage(); 
    })
    .catch(function(error) {
      var errorMessage = error.message;
      alert("invalid username/password"); 
    });
  }
  gLogin(){
    var provider = new firebase.auth.GoogleAuthProvider(); 
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        var token = result.credential.accessToken;
        alert("Logged in with google!")
      }
      var user = result.user;
    }).catch(function(error) {
      var errorMessage = error.message;
      alert("connection with google failed"); 
    });
  }
  fbLogin(){
    var provider = new firebase.auth.FacebookAuthProvider(); 

    firebase.auth().signInWithPopup(provider).then(function(result) {
      alert("fbLog worked")
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function(error) {
      var errorMessage = error.message;
      alert("connection with facebook failed");
    });
  }
  navRegister(){
    this.navCtrl.push(RegisterPage); 
  }
}
