import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AngularFireModule } from "angularfire2";
import { DatabaseServiceProvider } from '../providers/database-service/database-service'
import { AngularFireDatabase } from 'angularfire2/database';

export const config = {
  apiKey: "AIzaSyB-ji3Vox1RxyxqdmskEExtaNQ6SW2EwEA",
  authDomain: "m2mexam.firebaseapp.com",
  databaseURL: "https://m2mexam.firebaseio.com",
  projectId: "m2mexam",
  storageBucket: "m2mexam.appspot.com",
  messagingSenderId: "788867076066"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    DatabaseServiceProvider
  ]
})
export class AppModule {}
