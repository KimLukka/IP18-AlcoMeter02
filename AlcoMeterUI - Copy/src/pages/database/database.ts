import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
/**
 * Generated class for the DatabasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var readingID = 0
var userReadingID = 0;
var age:Number;
var userID:Number;
var gender:String;
var location:String;
var alcoholLevel:Number;
var date: Date;

@IonicPage()
@Component({
  selector: 'page-database',
  templateUrl: 'database.html',
})
export class DatabasePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  
  }

  addItem(){
    readingID++;
    userReadingID++;
    userID = 1;
    age = Math.floor(Math.random()*99) + 16;
    var gendernum = Math.floor(Math.random()*2) + 1
    switch(gendernum){
      case 1: gender = 'Male';
      break;
      case 2: gender = 'Female';
      break;
    }
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    if(date < 10){date = ("0" + date).slice(-2);}
    if(month < 10){month = ("0" +month).slice(-2);}
    if(minutes < 10){minutes = ("0" +minutes).slice(-2);}
    if(hour < 10){hour = ("0" +hour).slice(-2);}

    
    

    location = 'Belgium';
    var alcoholLeveltemp:Number = Math.random()*1
    alcoholLevel = +alcoholLeveltemp.toFixed(1);
    this.firebaseProvider.addItem(userID,readingID, userReadingID, age, gender, location, alcoholLevel, date, month, year, hour, minutes )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatabasePage');
  }


}
