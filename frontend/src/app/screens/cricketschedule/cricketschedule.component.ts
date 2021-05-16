import { Component, OnInit } from '@angular/core';
import { CricbuzzService } from 'src/app/services/cricbuzz.service';

@Component({
  selector: 'app-cricketschedule',
  templateUrl: './cricketschedule.component.html',
  styleUrls: ['./cricketschedule.component.css']
})
export class CricketscheduleComponent implements OnInit {

  schedule: any = [];

  constructor(private cric: CricbuzzService) {}

  ngOnInit(): void {
      this.cric.getSchedule().subscribe((data) => {
        this.schedule = data.schedule;

      });
  }

  reload() {
    window.location.reload();
  }

}
