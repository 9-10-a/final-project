import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersService } from './services/users.service';
import { ElogComponent } from './components/elog/elog.component';
import { HomeComponent } from './components/home/home.component';
import { LogCreateComponent } from './components/log-create/log-create.component';


@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent, ElogComponent, HomeComponent, LogCreateComponent],
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
    HttpClientModule],
  providers: [UsersService],

  bootstrap: [AppComponent]
})
export class AppModule {}
