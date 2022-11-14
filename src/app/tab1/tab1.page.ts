import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public orderNumber;
  public status;

  constructor(private orderService: OrdersService) {}


  sendOrder(): void {
    this.orderService.submitOrder(this.orderNumber).subscribe((result: any) => {
      this.status = result.success;
    });
    
  }

}

