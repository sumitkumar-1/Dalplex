import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryApiUrl: string = environment.apiServer + "/categories";
  categoryCourtApiurl: string = environment.apiServer + "/categoriescourt";

  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  getAllSportsCategory() : Observable<any> {
    return this.http.get(this.categoryApiUrl, this.getHeader());
  }

  addNewCategory(data: any) : Observable<any> {
    return this.http.post(this.categoryApiUrl, data, this.getHeader());
  }

  getAllCourts() : Observable<any> {
    return this.http.get(this.categoryCourtApiurl, this.getHeader());
  }

  addNewCourt(data: any) : Observable<any> {
    return this.http.post(this.categoryCourtApiurl, data, this.getHeader());
  }
}
