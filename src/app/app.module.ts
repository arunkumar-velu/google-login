import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { OrdersService } from "./shared/orders.service";
import { FreshchatService } from "./shared/freshchat.service";
import { ReactiveFormsModule } from "@angular/forms";

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [OrdersService, FreshchatService, AuthService, AngularFireAuth, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
