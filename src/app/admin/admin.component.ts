import { Component, OnInit } from '@angular/core';
import {InfiniteScrollCustomEvent, IonicModule} from "@ionic/angular";
import { Report } from '../Models/Report';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class AdminComponent  implements OnInit {
  reports: Report[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.reports.length + 1;
    for (let i = 0; i < 50; i++) {
      let report = new Report();
      report.id = count + i;
      report.userReporter = 'UserReporter ' + report.id;
      report.userReported = 'UserReported ' + report.id;
      report.reportReason = 'ReportReason ' + report.id;

      this.reports.push(report);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
