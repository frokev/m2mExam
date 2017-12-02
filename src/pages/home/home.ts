import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as mqtt from 'mqtt';
import { MqttClient } from 'mqtt/types/lib/connect';

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
  motion = false;
  switchStatus = false;

  client: MqttClient; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let options = {
      port : 33521,
      host : 'm23.cloudmqtt.com',
      username : 'cxuimdlz',
      password : 'qYs1sz9Y31a9'
    }

    this.client = mqtt.connect( 'mqtts://m23.cloudmqtt.com', options);

    this.client.on('close', func => {
      this.status = false;
    })

    this.client.on('connect', func => {
      this.client.subscribe('device/pir');
      this.client.subscribe('device/switch');
      this.status = true;
    });

    this.client.on('message', (topic, msg) => {
      if (topic == "device/pir") {
        if (msg.toString() == "1")
          this.motion = true;
        else
          this.motion = false;
      }

      else if (topic == "device/switch") {
        if (msg.toString() == "0") {
          this.switchStatus = true;
        }
        else
          this.switchStatus = false;
      }
    });
  }

  public toggleSystem(isRecording: boolean){
    let valobj = { 'value' : isRecording }

    this.client.publish("device/isRecording", JSON.stringify(valobj));

    this.isRecording = isRecording;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
