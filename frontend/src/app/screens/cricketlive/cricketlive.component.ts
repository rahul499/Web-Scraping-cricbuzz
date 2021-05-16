import { Component, OnInit } from '@angular/core';
import { CricbuzzService } from 'src/app/services/cricbuzz.service';

@Component({
  selector: 'app-cricketlive',
  templateUrl: './cricketlive.component.html',
  styleUrls: ['./cricketlive.component.css']
})
export class CricketliveComponent implements OnInit {

  score: any = [];

  constructor(private cric: CricbuzzService) {}

  ngOnInit(): void {
    this.cric.getLiveScore().subscribe((data) => {
      this.score = data.result;
      console.log(this.score);
    });
  }

  reload() {
    window.location.reload();
  }

}
