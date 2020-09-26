import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { Lang } from 'src/app/models/language.model';
import { WorklogModel } from 'src/app/models/worklog.model';
import { WORKLOG } from 'src/app/constants/worklog.const';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit, OnDestroy {
  worklogTable: WorklogModel[];
  private subscription: Subscription;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    const lang = this.translate.currentLang || this.translate.defaultLang || Lang.en;
    this.worklogTable = WORKLOG[lang];
    this.subscription = this.translate.store.onLangChange.subscribe(({ lang }) => this.worklogTable = WORKLOG[lang]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
