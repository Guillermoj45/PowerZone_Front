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
    console.log('Reports', this.reports);
     this.recuperarReportes();
  }


  onIonInfinite(event: InfiniteScrollCustomEvent) {
    setTimeout(() => {
        this.recuperarReportes();
        event.target.complete();
    }, 500);
  }

  recuperarReportes() {
    this.adminService.getReports(this.reports.length).subscribe((data: any) => {
        console.log('Data', data);
      this.reports = data;
    })
  }
}
