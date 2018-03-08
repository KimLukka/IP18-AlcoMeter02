import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the DatabasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var age:Number;
var weight:Number;
var height:Number;
var userID:Number;
var gender:String;
var location:String;
var alcoholLevel:Number;
var sendData:boolean;
var birthday:Number;
var birthMonth:Number;
var birthYear:Number;
var firstName:String;
var lastName:String;



@IonicPage()
@Component({
  selector: 'page-database',
  templateUrl: 'database.html',
})
export class DatabasePage {
  items: Observable<any[]>;
  gender = ".";
  weight = -1;
  height = -1;
  userID = -1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    
    
  }

  addItem(){
                                      
    userID = 1;                                         // userID = ID of the user, have to get it from firebase
    age = Math.floor(Math.random()*99) + 16;            //
    var gendernum = Math.floor(Math.random()*2) + 1     //
    switch(gendernum){                                  //
      case 1: gender = 'Male';                          //
      break;                                            //
      case 2: gender = 'Female';                        // Random values for simulation
      break;                                            //
    }                                                   //
                                                        //
    location = 'Belgium';                               //
    var alcoholLeveltemp:Number = Math.random()*1;      //
    alcoholLevel = +alcoholLeveltemp.toFixed(1);        //


    var today = new Date();                                                                                         //
    var date = today.getDate();                                                                                     //
    var month = today.getMonth()+1;                                                                                 //  getting date and time  
    var year = today.getFullYear();                                                                                 //  and converting date into  dd/mm/yyyy format.
    var hour = today.getHours();                                                                                    //  converting time in HH:MM format.
    var minutes = today.getMinutes();                                                                               //
    var seconds = today.getSeconds();                                                                               //
    var ms = today.getMilliseconds();                                                                               //  converting day,month,minutes and hours 
    if(date < 10){var daystring = ("0" + date).slice(-2);}else{daystring = date.toString()}                         //  to 05 instead of 5 for example
    if(month < 10){var monthstring = ("0" +month).slice(-2);}else{monthstring = month.toString();}                  //  
    if(minutes < 10){var minutesstring = ("0" +minutes).slice(-2);}else{ minutesstring = minutes.toString();}       //
    if(hour < 10){var hourstring = ("0" +hour).slice(-2);}else{ hourstring = hour.toString();}                      //  
                                                                                                                    //  sortingMS is the amount of ms between
    var datestring = daystring + '/' + monthstring +'/' + year;                                                     //  the date of the measurement and 01/01/1970 00:00.                                 
    var timestring = hourstring + ':' + minutesstring;                                                              //  this value is only used to sort the data 
    var sortingms = Date.UTC(year,month,date,hour,minutes,seconds,ms);                                              //
    

    
    this.firebaseProvider.addItem(userID, age, gender, location, alcoholLevel, datestring, timestring, sortingms );
    var items = this.firebaseProvider.getList();
    
  }

  addUser(){

    age = Math.floor(Math.random()*83) + 16;            //
                                                        //
    var genderNum = Math.floor(Math.random()*2)+1;      //
    switch(genderNum){                                  //
      case 1: gender = 'Male';                          //
      break;                                            //
      case 2: gender = 'Female';                        // Random values for simulation
      break;                                            //
    }                                                   //
                                                        //
    var sendDataNum = Math.floor(Math.random()*2)+1;    //
    switch(sendDataNum){                                //
      case 1: sendData = true;                          //
      break;                                            //
      case 2: sendData = false;                         // 
      break;                                            //
    }                                                   //
                                                        //
    birthday = Math.floor(Math.random()*31);            //
    birthMonth = Math.floor(Math.random()*12);          //
    birthYear = Math.floor(Math.random()* 84) +1918;    //
                                                        //
    height = Math.floor(Math.random()* 90) +120;        //
    weight = Math.floor(Math.random()* 90) +50;         //

    

    this.firebaseProvider.addUser(birthday,birthMonth,birthYear,gender,weight,height,"Test","User",sendData, "TestUser@");

  }

  updateUser(){
    var newHeight = 150;
    var newWeight = 160;
    var newUserID = 3;
    var newGender = "male";

    this.firebaseProvider.updateUser(newUserID,newHeight,newWeight,newGender);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatabasePage');
  }


}
