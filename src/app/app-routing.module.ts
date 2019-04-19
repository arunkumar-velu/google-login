import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';



const routes: Routes = [
{path: 'order-list' , component: OrderListComponent, canActivate: [AuthGuard]},
{path: 'orders' , component: OrdersComponent, canActivate: [AuthGuard]},
{path: 'login' , component: LoginComponent},
{ path: '',  redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
