import { ArticleService } from './services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eee';
  data: any;
  constructor(private articleService: ArticleService) { }
  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(res => {
      console.log(res)
      this.data = res.data
    })
  }

}
