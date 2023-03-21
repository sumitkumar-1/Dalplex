import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  paymentApiUrl: string = environment.apiServer + "/paymentmethod";

  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  addNewPaymentMethod(data: any) : Observable<any> {
    return this.http.post(this.paymentApiUrl, data, this.getHeader());
  }

  getPaymentMethodDetails(): Observable<any> {
    return this.http.get(this.paymentApiUrl, this.getHeader());
  }
}
