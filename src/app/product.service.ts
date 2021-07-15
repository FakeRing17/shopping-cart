import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {
  baseURL: string = 'https://60efed10f587af00179d3b82.mockapi.io/api';

  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get(this.baseURL + '/products');
  }
}
