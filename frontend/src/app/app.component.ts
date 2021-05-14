import { Component } from "@angular/core";
import { CricbuzzService } from "./services/cricbuzz.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  schedule: any = [];
  news: any = [];
  score: any = [];
  football: any = [];
  live: boolean;
  sched: boolean;
  latestnews: boolean;
  footballlive: boolean;
  homePage: boolean;

  constructor(private cric: CricbuzzService) {}

  getSchedule() {
    this.cric.getSchedule().subscribe((data) => {
      this.schedule = data.schedule;
    });
    this.sched = true;
    this.live = false;
    this.latestnews = false;
    this.footballlive = false;
    this.homePage = false;
  }

  getNews() {
    this.cric.getNews().subscribe((data) => {
      this.news = data.result;
    });
    this.sched = false;
    this.live = false;
    this.latestnews = true;
    this.footballlive = false;
    this.homePage = false;
  }

  getLiveScore() {
    this.cric.getLiveScore().subscribe((data) => {
      this.score = data.result;
      console.log(this.score);
    });
    this.sched = false;
    this.live = true;
    this.latestnews = false;
    this.footballlive = false;
    this.homePage = false;
  }

  getLiveScoreSoccer() {
    this.cric.getLiveScoreSoccer().subscribe((data) => {
      this.football = data.result.match;
      console.log(this.football);
    });
    this.sched = false;
    this.live = false;
    this.latestnews = false;
    this.footballlive = true;
    this.homePage = false;
  }

  home() {
    this.homePage = true;
    this.sched = false;
    this.live = false;
    this.latestnews = false;
    this.footballlive = false;
  }



}
