import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  
  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
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

  addUser(birthDay,birthMonth,birthYear, gender, weight, firstName, lastName, sendData, ){        //
    const itemRef = this.db.database.ref('UserDatabase/Users/').push().set({                      //
      firstName:firstName, lastName:lastName, gender:gender, weight:weight,                       // adds user into user database
      birthDay:birthDay, birthMonth:birthMonth, birthYear:birthYear, sendDataBool:sendData        //
    })                                                                                            //
  }                                                                                               //
  
  getList(){
    var items: Observable<any[]>;
    items = this.db.list('Readings').valueChanges();
    return items;
  }
}
