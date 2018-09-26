import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Log } from '../log.model';
import { LogsService } from '../logs.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit, OnDestroy {
  logs: Log[] = [];
  isLoading = false;
  private logsSub: Subscription;

  constructor(public logsService: LogsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.logsService.getLogs();
    this.logsSub = this.logsService
      .getLogUpdateListener()
      .subscribe((logs: Log[]) => {
        this.isLoading = false;
        this.logs = logs;
      });
  }

  onDelete(logId: string) {
    this.logsService.deleteLog(logId);
  }

  ngOnDestroy() {
    this.logsSub.unsubscribe();
  }
}
