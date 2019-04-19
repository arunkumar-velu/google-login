import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FreshchatService {
  init(){
    if(!(<any>window).fcWidget.isInitialized()){
      (<any>window).fcWidget.init({ token:'56a02238-07f4-4543-b055-f7678dc56021', host : 'https://wchat.freshchat.com'});
    }
  }
}
