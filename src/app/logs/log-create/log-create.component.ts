import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { LogsService } from '../logs.service';
import { Log } from '../logs.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../users/auth.service';

@Component({
  selector: 'app-log-create',
  templateUrl: './log-create.component.html',
  styleUrls: ['./log-create.component.css']
})
export class LogCreateComponent implements OnInit, OnDestroy {
  enteredDate = '';
  enteredTitle = '';
  enteredContent = '';
  enteredDuration = '';
  log: Log;
  isLoading = false;
  form: FormGroup;
  private mode = 'create';
  private logId: string;
  private authStatusSub: Subscription;

  constructor(
    public logsService: LogsService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.form = new FormGroup({
      date: new FormControl(null, { validators: [Validators.required] }),
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      duration: new FormControl(null, { validators: [Validators.required] })
    });
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
            duration: logData.duration,
            creator: logData.creator
          };
          this.form.setValue({
            date: this.log.date,
            title: this.log.title,
            content: this.log.content,
            duration: this.log.duration
          });
        });
      } else {
        this.mode = 'create';
        this.logId = null;
      }
    });
  }

  onSaveLog() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.logsService.addLog(
        this.form.value.date,
        this.form.value.title,
        this.form.value.content,
        this.form.value.duration
      );
    } else {
      this.logsService.updateLog(
        this.logId,
        this.form.value.date,
        this.form.value.title,
        this.form.value.content,
        this.form.value.duration
      );
    }
    this.form.reset();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
