import { Component, OnInit } from '@angular/core';
import { CricbuzzService } from 'src/app/services/cricbuzz.service';

@Component({
  selector: 'app-footballlive',
  templateUrl: './footballlive.component.html',
  styleUrls: ['./footballlive.component.css']
})
export class FootballliveComponent implements OnInit {

  football: Array<any>;
  totalRecords: number;
  page:number = 1;

  constructor(private cric: CricbuzzService) {
    this.football = new Array<any>();
  }

  ngOnInit(): void {
    this.cric.getLiveScoreSoccer().subscribe((data) => {
      this.football = data.result.match;
      this.totalRecords = data.result.match.length;
      console.log(this.football);
    });
  }

  reload() {
    window.location.reload();
  }

}
