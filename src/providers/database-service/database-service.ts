import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { List } from 'ionic-angular/components/list/list';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DatabaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseServiceProvider {

  constructor(private af: AngularFireDatabase) {
    
    console.log('Hello DatabaseServiceProvider Provider');
  }
  
  public getLog(){
    return this.af.list('/sensorlog/').valueChanges();
  }

}
