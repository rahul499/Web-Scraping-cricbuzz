import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CricketliveComponent } from './screens/cricketlive/cricketlive.component';
import { CricketnewsComponent } from './screens/cricketnews/cricketnews.component';
import { CricketscheduleComponent } from './screens/cricketschedule/cricketschedule.component';
import { FootballliveComponent } from './screens/footballlive/footballlive.component';
import { HomepageComponent } from './screens/homepage/homepage.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'livescore', component: CricketliveComponent},
  { path: 'schedule', component: CricketscheduleComponent},
  { path: 'news', component: CricketnewsComponent},
  { path: 'football', component: FootballliveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, CricketliveComponent, CricketnewsComponent, CricketscheduleComponent, FootballliveComponent];
