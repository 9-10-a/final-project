import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogListComponent } from './logs/log-list/log-list.component';
import { LogCreateComponent } from './logs/log-create/log-create.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './users/auth.guard';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'log', component: LogListComponent },
  { path: 'create', component: LogCreateComponent },
  { path: 'edit/:logId', component: LogCreateComponent },
  // user paths
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomepageComponent },
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
