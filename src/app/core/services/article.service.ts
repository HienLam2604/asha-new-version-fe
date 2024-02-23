import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getAllArticles(): Observable<any> {
    return this.http.get('https://api.asha.com.vn/api/products');
  }
}
