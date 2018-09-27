import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Log } from './log.model';

@Injectable({ providedIn: 'root' })
export class LogsService {
  private logs: Log[] = [];
  private logsUpdated = new Subject<Log[]>();

  constructor(private http: HttpClient, private router: Router) {}

  // Sending http request to get logs
  getLogs() {
    this.http
      .get<{ message: string; logs: any }>('http://localhost:3000/api/logs')
      // transforming to access _id from db
      .pipe(
        map(logData => {
          return logData.logs.map(log => {
            return {
              date: log.date,
              title: log.title,
              content: log.content,
              id: log._id,
              duration: log.duration
            };
          });
        })
      )
      .subscribe(transformedLogs => {
        this.logs = transformedLogs;
        // informs the rest of the app about the update
        this.logsUpdated.next([...this.logs]);
      });
  }

  getLogUpdateListener() {
    return this.logsUpdated.asObservable();
  }

  // gets the log information for editing a post - loaded into the log create
  getLog(id: string) {
    return this.http.get<{ _id: string; date: Date, title: string; content: string; duration: string }>(
      'http://localhost:3000/api/logs/' + id
    );
  }
  // Creating a new log
  addLog(date: Date, title: string, content: string, duration: string) {
    const log: Log = { id: null, date: date, title: title, content: content, duration: duration };
    this.http
      .post<{ message: string; logId: string }>(
        'http://localhost:3000/api/logs',
        log
      )
      .subscribe(responseData => {
        const id = responseData.logId;
        log.id = id;
        this.logs.push(log);
        this.logsUpdated.next([...this.logs]);
        // routing after a log is saved - Service needs router module for this
        this.router.navigate(['/log']);
      });
  }

  // Edit a log
  updateLog(id: string, date: Date, title: string, content: string, duration: string) {
    const log: Log = { id: id, date: date, title: title, content: content, duration: duration };
    this.http
      .put('http://localhost:3000/api/logs/' + id, log)
      .subscribe(response => {
        const updatedLogs = [...this.logs];
        const oldLogIndex = updatedLogs.findIndex(l => l.id === log.id);
        updatedLogs[oldLogIndex] = log;
        this.logs = updatedLogs;
        this.logsUpdated.next([...this.logs]);
        // routing after a log is saved - Service needs router module for this
        this.router.navigate(['/log']);
      });
  }

  // delete log
  deleteLog(logId: string) {
    this.http
      .delete('http://localhost:3000/api/logs/' + logId)
      .subscribe(() => {
        // used to keep log list updated when post is deleted
        const updatedLogs = this.logs.filter(log => log.id !== logId);
        this.logs = updatedLogs;
        this.logsUpdated.next([...this.logs]);
      });
  }
}
