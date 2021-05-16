import { Component, OnInit } from '@angular/core';
import { CricbuzzService } from 'src/app/services/cricbuzz.service';

@Component({
  selector: 'app-cricketnews',
  templateUrl: './cricketnews.component.html',
  styleUrls: ['./cricketnews.component.css']
})
export class CricketnewsComponent implements OnInit {

  news: any = [];

  constructor(private cric: CricbuzzService) {}

  ngOnInit(): void {
      this.cric.getNews().subscribe((data) => {
        this.news = data.result;
      });
  }

  reload() {
    window.location.reload();
  }
}
