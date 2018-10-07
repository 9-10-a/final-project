import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './users/auth.guard';

import { LogListComponent } from './logs/log-list/log-list.component';
import { LogCreateComponent } from './logs/log-create/log-create.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'log', component: LogListComponent },
  { path: 'create', component: LogCreateComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'edit/:logId',
    component: LogCreateComponent,
    canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: './users/auth.module#AuthModule' },
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
