import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './timer.component.html',
  styleUrls: [ './timer.component.css' ]
})
export class AppComponent  {
  name = 'SweatLog';
  timeLeft: number = 120;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}


