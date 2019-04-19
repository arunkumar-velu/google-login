import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";
import { FreshchatService } from "../shared/freshchat.service";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor( private ordersService:OrdersService,  private freshchat:FreshchatService, private authService: AuthService) { 
    this.getCoffeeOrders();
    this.freshchat.init();
  }

  ngOnInit() {
    this.getCoffeeOrders();
    this.freshchat.init();
  }
  coffeeOrders;
  getCoffeeOrders = () =>
    this.ordersService
    .getCoffeeOrders()
    .subscribe(res =>(this.coffeeOrders = res));
  markCompleted = data => 
    this.ordersService.updateCoffeeOrder(data);
  deleteOrder = data => 
    this.ordersService.deleteCoffeeOrder(data);

  logout(){
    this.authService.logout();
  }
}
