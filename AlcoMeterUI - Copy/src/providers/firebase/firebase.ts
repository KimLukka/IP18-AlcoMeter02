import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

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

  addItem(userID,readingID,userReadingID, age, gender, location, alcoholLevel, date, month, year, hour, minutes ){
    const itemRef = this.db.database.ref('Readings/' + readingID).set({
      age:age, gender:gender, location:location, alcoholLevel:alcoholLevel, date:date, month:month, year:year, hour:hour, minutes:minutes
    })

    const itemRef2 = this.db.database.ref('Users/' + userID + '/' + userReadingID).set({
      date:date, month:month, year:year, hour:hour, minutes:minutes, location:location, alcoholLevel:alcoholLevel
    })
    
   // itemRef.set({userID: userID, age:age, gender:gender, location:location, alcoholLevel:alcoholLevel})
  }

}
