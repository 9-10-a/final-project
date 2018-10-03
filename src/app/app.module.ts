import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogCreateComponent } from './logs/log-create/log-create.component';
import { HeaderComponent } from './header/header.component';
import { LogListComponent } from './logs/log-list/log-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TimerComponent } from './timer/timer.component';
import { AuthInterceptor } from './users/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { LogsModule } from './logs/logs.module';

@NgModule({
  declarations: [
    AppComponent,
    LogCreateComponent,
    HeaderComponent,
    LogListComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
    TimerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    LogsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
