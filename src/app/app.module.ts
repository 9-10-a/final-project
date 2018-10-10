import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from '../app/users/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { LogsModule } from './logs/logs.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';

import { AboutComponent } from './about/about.component';
<<<<<<< HEAD
import { TimerComponent } from './timer/timer.component';
import { SimpleTimer } from 'ng2-simple-timer';

=======
import { BenchmarkCreateComponent } from './benchmarks/benchmark-create/benchmark-create.component';
import { BenchmarkListComponent } from './benchmarks/benchmark-list/benchmark-list.component';
import { TechniquesComponent } from './techniques/techniques.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> df0780096c025c816e085cb4066d7cbcacdc20c9

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    HomepageComponent,
    TimerComponent,
    ProfileComponent,
<<<<<<< HEAD
    AboutComponent    
    
=======
    AboutComponent,
    BenchmarkCreateComponent,
    BenchmarkListComponent,
    TechniquesComponent
>>>>>>> df0780096c025c816e085cb4066d7cbcacdc20c9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
<<<<<<< HEAD
    LogsModule
     
    
=======
    LogsModule,
    FormsModule,
    ReactiveFormsModule
>>>>>>> df0780096c025c816e085cb4066d7cbcacdc20c9
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
   
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
