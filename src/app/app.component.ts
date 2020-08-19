import {Component, OnInit} from '@angular/core';
import {NewsService} from './news.service';
import {NewsModel} from './news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'news-aggregator-front';
  today: Date = new Date();

  constructor(private newsService: NewsService) {}

  news: NewsModel[] = [];

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (response) => {this.news = response; },
      (error) => {console.log('No data found ' + error); }
    );
  }
}
