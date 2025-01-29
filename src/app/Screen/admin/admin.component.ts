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
  avisados: Report[] = [];
  suspendidos: Report[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    console.log('Reports', this.reports);
    this.recuperarSuspendidos();
    this.recuperarAvisados();
    this.recuperarReportes();
  }


  onIonInfinite(event: InfiniteScrollCustomEvent) {
    setTimeout(() => {
        this.recuperarReportes();
        event.target.complete();
    }, 500);
  }

  recuperarReportes() {
    this.adminService.getReports(this.reports.length).subscribe((data:Report[]) => {
        console.log('Report', data);
        this.reports.push(...data);
    })
  }

    recuperarAvisados() {
        this.adminService.getUserWarnings(this.avisados.length).subscribe((data:Report[]) => {
            console.log('Avisados', data);
            this.avisados.push(...data);
        })
    }

    recuperarSuspendidos() {
        this.adminService.getUserBanned(this.suspendidos.length).subscribe((data:Report[]) => {
            console.log('Suspendidos', data);
            this.suspendidos.push(...data);
        })
    }
}
