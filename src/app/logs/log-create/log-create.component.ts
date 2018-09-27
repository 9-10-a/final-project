import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { LogsService } from '../logs.service';
import { Log } from '../log.model';

@Component({
  selector: 'app-log-create',
  templateUrl: './log-create.component.html',
  styleUrls: ['./log-create.component.css']
})
export class LogCreateComponent implements OnInit {
  enteredDate = Date;
  enteredTitle = '';
  enteredContent = '';
  enteredDuration = '';
  log: Log;
  isLoading = false;
  private mode = 'create';
  private logId: string;

  constructor(public logsService: LogsService, public route: ActivatedRoute) {}

  ngOnInit() {
    // extracting the log id for updating edit/:id
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('logId')) {
        this.mode = 'edit';
        this.logId = paramMap.get('logId');
        this.isLoading = true;
        this.logsService.getLog(this.logId).subscribe(logData => {
          this.isLoading = false;
          this.log = {
            id: logData._id,
            date: logData.date,
            title: logData.title,
            content: logData.content,
            duration: logData.duration
          };
        });
      } else {
        // if we don't have a log id we are in create mode
        this.mode = 'create';
        this.logId = null;
      }
    });
  }

  onSaveLog(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.logsService.addLog(form.value.date, form.value.title, form.value.content, form.value.duration);
    } else {
      this.logsService.updateLog(
        this.logId,
        form.value.date,
        form.value.title,
        form.value.content,
        form.value.duration
      );
    }
    form.resetForm();
  }
}
