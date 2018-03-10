import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import * as firebase from 'firebase/app';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register'; 

export const firebaseConfig = {
  apiKey: "AIzaSyDZp1w9Tl7zI1QKTGCpeyqzTrtTyC-bIew",
  authDomain: "alcometer-abfbf.firebaseapp.com",
  databaseURL: "https://alcometer-abfbf.firebaseio.com",
  projectId: "alcometer-abfbf",
  storageBucket: "alcometer-abfbf.appspot.com",
  messagingSenderId: "1031304897035"
}

firebase.initializeApp(firebaseConfig); 

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
