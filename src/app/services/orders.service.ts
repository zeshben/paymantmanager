import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly http: HttpClient) { }

  submitOrder(ordernum: string) {
    return this.http.post('https://eoixt953mle3ujd.m.pipedream.net',{ orderNum: ordernum});
  }

}
