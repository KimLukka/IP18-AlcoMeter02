import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { AboutPage } from '../about/about';
import { DatabasePage } from '../database/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rs = DatabasePage;

  constructor(){

  }
}
