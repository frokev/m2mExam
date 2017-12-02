import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseServiceProvider } from '../../providers/database-service/database-service'

/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {

  log;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dsp: DatabaseServiceProvider) {

    dsp.getLog().subscribe( log => {
      this.log = log.reverse();
    })

  }

  public stringify(obj){
    return JSON.stringify(obj);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');
  }

}
