import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";
import { FreshchatService } from "../shared/freshchat.service";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService:OrdersService, private freshchat:FreshchatService, private authService: AuthService) { }
  coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];
  coffeeOrder = [];
  addCoffee = coffee => this.coffeeOrder.push(coffee);
  removeCoffee = coffee => {
      let index = this.coffeeOrder.indexOf(coffee);
      if (index > -1) this.coffeeOrder.splice(index, 1);
  };
  ngOnInit() {
    this.freshchat.init();
  }
  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;
    
    this.ordersService.createCoffeeOrder(data)
      .then(res => {
         /*do something here....
         maybe clear the form or give a success message*/
      });
  }
  logout(){
    this.authService.logout();
  }
}
