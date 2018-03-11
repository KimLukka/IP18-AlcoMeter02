import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  
  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
    var userID:number;     
    this.db.database.ref('UserDatabase/Users/UserCount').on('value', snapshot =>{
      userID = snapshot.val();
    });
  }

  addItem(userID, age, gender, location, alcoholLevel, datestring, timestring , sortingms){
    const itemRef = this.db.database.ref('ReadingDatabase/Readings/').push().set({                //
      date : datestring, time: timestring, age:age, gender:gender,                                // adds Reading into general readingsdatabase 
      location:location, alcoholLevel:alcoholLevel, sortingms:sortingms                           //  
    })                                                                                            //
    
    const itemRef2 = this.db.database.ref('ReadingDatabase/Users/' + userID + '/').push().set({   //
      date: datestring,time:timestring, location:location, alcoholLevel:alcoholLevel, sortingms   // adds Reading into user specific database
    })                                                                                            //
  }

  addUser(birthDay,birthMonth,birthYear, gender, weight, height, firstName, lastName, sendData, email ){//

    /*  this.db.database.ref('UserDatabase/userCount').once('value').then(function(snapshot){
       userID = 5;
     }) ;   */
    var userID:number;     
    this.db.database.ref('UserDatabase/Users/UserCount').on('value', snapshot =>{
      userID = snapshot.val();
    }); 
                 
    const itemRef = this.db.database.ref('UserDatabase/Users/' + userID).set({                    //
      firstName:firstName, lastName:lastName, gender:gender, weight:weight, height:height,        // adds user into user database
      birthDay:birthDay, birthMonth:birthMonth, birthYear:birthYear, sendData:sendData,           //
      userID:userID                                                                               //
    }) ;                                                                                          //
    

    /*const itemRef = this.db.database.ref('UserDatabase/Users/' + email).set({                    //
      firstName:firstName, lastName:lastName, gender:gender.toLowerCase, weight:weight, height:height,        // adds user into user database
      birthDay:birthDay, birthMonth:birthMonth, birthYear:birthYear, sendData:sendData,           //
      email:email                                                                               //
    }) ;                                                                                          //
    
    */
    
    userID++;                                                                                     // this is temp userID 
    const itemRef2 = this.db.database.ref('UserDatabase/Users').update({UserCount:userID})        //
    
  }                                                                                               
  
  updateUser(userID, height , weight , gender){
    var userRef = this.db.database.ref('UserDatabase/Users');
    var specificRef = userRef.child(userID);
    if (height != -1) {
      specificRef.update({height:height})
    }
    if (weight != -1) {
      specificRef.update({weight:weight})
    }
    if (gender != ".") {
      specificRef.update({gender:gender})
    }
  }

  getList(){
    var items: Observable<any[]>;
    items = this.db.list('Readings').valueChanges();
    return items;
  }
}
