import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as mqtt from 'mqtt';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  status = false;
  isRecording = true;
  motion = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let options = {
      port : 33521,
      host : 'm23.cloudmqtt.com',
      username : 'cxuimdlz',
      password : 'qYs1sz9Y31a9'
    }

    let client = mqtt.connect( 'mqtts://m23.cloudmqtt.com', options);

    client.on('close', func => {
      this.status = false;
    })

    client.on('connect', func => {
      client.subscribe('device/pir');
      this.status = true;
    });

    client.on('message', (topic, msg) => {
      if (topic == "device/pir") {
        if (msg.toString() == "1")
          this.motion = true;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
