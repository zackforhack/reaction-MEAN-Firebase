import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StatusesComponent } from './statuses/statuses.component';

import { StatusesService } from './statuses/statuses.service';

export const firebaseConfig = {
  apiKey: "AIzaSyCno9feAztFez_tHtl96NQbq_UYHEsmLd8",
  authDomain: "reaction-mean-firebase.firebaseapp.com",
  databaseURL: "https://reaction-mean-firebase.firebaseio.com",
  projectId: "reaction-mean-firebase",
  storageBucket: "reaction-mean-firebase.appspot.com",
  messagingSenderId: "301488137604"
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    StatusesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [StatusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
