import { Component, OnInit } from '@angular/core';
import { CricbuzzService } from 'src/app/services/cricbuzz.service';

@Component({
  selector: 'app-footballlive',
  templateUrl: './footballlive.component.html',
  styleUrls: ['./footballlive.component.css']
})
export class FootballliveComponent implements OnInit {

  football: any = [];

  constructor(private cric: CricbuzzService) {}

  ngOnInit(): void {
    this.cric.getLiveScoreSoccer().subscribe((data) => {
      this.football = data.result.match;
      console.log(this.football);
    });
  }

  reload() {
    window.location.reload();
  }

}
