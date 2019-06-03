import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { isLogged } from './guards/login-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeetingComponent } from './meeting/meeting.component';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule'},
  { path: 'app', component: DashboardComponent, canActivate: [isLogged]},
  { path: 'app/meetings/:id', component: MeetingComponent, canActivate: [isLogged] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
