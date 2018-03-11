import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { RegisterPage } from '../register/register';
import {SettingsPage} from '../settings/settings';
/**
 * Generated class for the DatabasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var age:Number;
var userID:Number;
var gender:String;
var location:String;
var alcoholLevel:Number;



@IonicPage()
@Component({
  selector: 'page-database',
  templateUrl: 'database.html',
})
export class DatabasePage {
  items: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    
    
  }

  addItem(){
    
                                      
    userID = 1;                                         //userID = ID van de user, deze moet dynamisch nog gelinkt worden met firebase
    age = Math.floor(Math.random()*99) + 16;            //
    var gendernum = Math.floor(Math.random()*2) + 1     //
    switch(gendernum){                                  //
      case 1: gender = 'Male';                          //
      break;                                            //
      case 2: gender = 'Female';                        // Random waarden ter simulatie.
      break;                                            //
    }                                                   //
                                                        //
    location = 'Belgium';                               //
    var alcoholLeveltemp:Number = Math.random()*1;      //
    alcoholLevel = +alcoholLeveltemp.toFixed(1);        //


    var today = new Date();                                                                                         //
    var date = today.getDate();                                                                                     //
    var month = today.getMonth()+1;                                                                                 //
    var year = today.getFullYear();                                                                                 //
    var hour = today.getHours();                                                                                    //
    var minutes = today.getMinutes();                                                                               //
    var seconds = today.getSeconds();                                                                               //
    var ms = today.getMilliseconds();                                                                               //  Datum en tijd verkrijgen en 
    if(date < 10){var daystring = ("0" + date).slice(-2);}else{daystring = date.toString()}                         //  deze omzetten in het dd/mm/yyyy formaat.
    if(month < 10){var monthstring = ("0" +month).slice(-2);}else{monthstring = month.toString();}                  //  tijd onzetten in get HH:MM formaat.
    if(minutes < 10){var minutesstring = ("0" +minutes).slice(-2);}else{ minutesstring = minutes.toString();}       //
    if(hour < 10){var hourstring = ("0" +hour).slice(-2);}else{ hourstring = hour.toString();}                      //  sortingMS is het aantal miliseconden tussen
                                                                                                                    //  het verkrijgen van de datum en 01/01/1970 00:00.
    var datestring = daystring + '/' + monthstring +'/' + year;                                                     //  Deze waarde is puur voor te kunnen sorteren.                                 
    var timestring = hourstring + ':' + minutesstring;                                                              //
    var sortingms = Date.UTC(year,month,date,hour,minutes,seconds,ms);                                              //
    

    
    //this.firebaseProvider.addItem(userID, age, gender, location, alcoholLevel, datestring, timestring, sortingms );
    //var items = this.firebaseProvider.getList();
    this.navCtrl.push(RegisterPage);
  }
  changeConfig(){
    this.navCtrl.push(SettingsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DatabasePage');
  }


}
