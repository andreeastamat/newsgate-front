import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsModel} from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService{

  newsUrl = 'http://localhost:5000/news';

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<NewsModel[]>(this.newsUrl);
  }
}


