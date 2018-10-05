import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LogCreateComponent } from './logs/log-create/log-create.component';
import { HeaderComponent } from './header/header.component';
import { LogListComponent } from './logs/log-list/log-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { HelloComponent } from './timer/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    LogCreateComponent,
    HeaderComponent,
    LogListComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
    ProfileComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HelloComponent
    

  ],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule {}
