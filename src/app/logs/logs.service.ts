import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { Log } from './logs.model';
const BACKEND_URL = environment.apiUrl + '/logs/';

@Injectable({ providedIn: 'root' })
export class LogsService {
  private logs: Log[] = [];
  private logsUpdated = new Subject<{ logs: Log[]; logCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  // Paginator
  getLogs(logsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${logsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; logs: any; maxLogs: number }>(
        BACKEND_URL + queryParams
      )
      .pipe(
        map(logData => {
          return {
            logs: logData.logs.map(log => {
              return {
                id: log._id,
                date: log.date,
                content: log.content,
                minutes: log.minutes,
                seconds: log.seconds,
                score: log.score,
                creator: log.creator
              };
            }),
            maxLogs: logData.maxLogs
          };
        })
      )
      .subscribe(transformedLogData => {
        this.logs = transformedLogData.logs;
        // informs the rest of the app about the update
        this.logsUpdated.next({
          logs: [...this.logs],
          logCount: transformedLogData.maxLogs
        });
      });
  }

  getLogUpdateListener() {
    return this.logsUpdated.asObservable();
  }

  // get log by id
  getLog(id: string) {
    return this.http.get<{
      _id: string;
      date: string;
      content: string;
      minutes: string;
      seconds: string;
      score: string;
      creator: string;
    }>(BACKEND_URL + id);
  }

  // add new log
  addLog(
    date: string,
    content: string,
    minutes: string,
    seconds: string,
    score: string,
    creator: string
  ) {
    const log: Log = {
      id: null,
      date: date,
      content: content,
      minutes: minutes,
      seconds: seconds,
      score: score,
      creator: creator
    };
    this.http
      .post<{ message: string; logId: string }>(BACKEND_URL, log)
      .subscribe(responseData => {
        // routing after a log is saved - Service needs router module for this
        this.router.navigate(['/log']);
      });
  }

  // update specific log by id
  updateLog(
    id: string,
    date: string,
    content: string,
    minutes: string,
    seconds: string,
    score: string,
    creator: string
  ) {
    const log: Log = {
      id: id,
      date: date,
      content: content,
      minutes: minutes,
      seconds: seconds,
      score: score,
      creator: creator
    };
    this.http.put(BACKEND_URL + id, log).subscribe(response => {
      // routing after a log is saved - Service needs router module for this
      this.router.navigate(['/log']);
    });
  }

  deleteLog(logId: string) {
    return this.http.delete(BACKEND_URL + logId);
  }
}

/*@Injectable({ providedIn: 'root' })
export class LogsService {
  private logs: Log[] = [];
  private logsUpdated = new Subject<Log[]>();

  constructor(private http: HttpClient, private router: Router) {}

  // Sending http request to get logs
  getLogs() {
    this.http
      .get<{ message: string; logs: any }>(BACKEND_URL)
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
    return this.http.get<{
      _id: string;
      date: Date;
      title: string;
      content: string;
      duration: string;
    }>(BACKEND_URL + id);
  }
  // Creating a new log
  addLog(date: Date, title: string, content: string, duration: string) {
    const log: Log = {
      id: null,
      date: date,
      title: title,
      content: content,
      duration: duration
    };
    this.http
      .post<{ message: string; logId: string }>(BACKEND_URL, log)
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
  updateLog(
    id: string,
    date: Date,
    title: string,
    content: string,
    duration: string
  ) {
    const log: Log = {
      id: id,
      date: date,
      title: title,
      content: content,
      duration: duration
    };
    this.http.put(BACKEND_URL + id, log).subscribe(response => {
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
    this.http.delete(BACKEND_URL + logId).subscribe(() => {
      // used to keep log list updated when post is deleted
      const updatedLogs = this.logs.filter(log => log.id !== logId);
      this.logs = updatedLogs;
      this.logsUpdated.next([...this.logs]);
    });
  }
}*/
