import { Component, OnInit } from '@angular/core';
import {InfiniteScrollCustomEvent, IonicModule} from "@ionic/angular";
import { Report } from 'src/app/Models/Report';
import { AdminService } from 'src/app/Service/Admin.service';

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
  revisables: Report[] = [];
  avisados: Report[] = [];
  suspendidos: Report[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.generateItems();
    console.log('Reports', this.reports);
    this.adminService.getReports(0).subscribe((data: any) => {
        console.log(data);
    })
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
