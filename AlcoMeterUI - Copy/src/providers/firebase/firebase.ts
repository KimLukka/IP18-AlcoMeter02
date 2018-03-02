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

  addItem(userID,readingID, userReadingID, age, gender, location, alcoholLevel, datestring, timestring , sortingms){
    const itemRef = this.db.database.ref('Readings/' + readingID).set({                                                               //
      date : datestring, time: timestring, age:age, gender:gender, location:location, alcoholLevel:alcoholLevel, sortingms:sortingms  // adds Reading into general readingsdatabase 
    })                                                                                                                                //

    const itemRef2 = this.db.database.ref('Users/' + userID + '/' + userReadingID).set({          //
      date: datestring,time:timestring, location:location, alcoholLevel:alcoholLevel, sortingms   // adds Reading into user specific database
    })                                                                                            //
    
   // itemRef.set({userID: userID, age:age, gender:gender, location:location, alcoholLevel:alcoholLevel})
  }
  
  getList(){
    var items: Observable<any[]>;
    items = this.db.list('Readings').valueChanges();
    return items;
  }
}
