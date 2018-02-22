import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rs = AboutPage;

  constructor(){

  }
}
