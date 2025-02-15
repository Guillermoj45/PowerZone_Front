import {Component, OnInit} from '@angular/core';
import {InfiniteScrollCustomEvent, IonicModule} from "@ionic/angular";
import {Report} from 'src/app/Models/Report';
import {AdminService} from 'src/app/Service/Admin.service';
import {ProfileWarningBan} from "../../Models/ProfileWarningBan";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: true,
    imports: [
        IonicModule,
        RouterLink
    ]
})
export class AdminComponent  implements OnInit {
  reports: Report[] = [];
  avisados: ProfileWarningBan[] = [];
  suspendidos: ProfileWarningBan[] = [];

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
    console.log('Reports', this.reports);
    this.recuperarSuspendidos();
    this.recuperarAvisados();
    this.recuperarReportes();
  }


  onIonInfiniteReportes(event: InfiniteScrollCustomEvent) {
    setTimeout(() => {
        this.recuperarReportes();
        event.target.complete();
    }, 500);
    window.location.reload()
  }

  onIonInfiniteAvisado(event: InfiniteScrollCustomEvent) {
    setTimeout(() => {
        this.recuperarAvisados();
        event.target.complete();
    }, 500);
      window.location.reload()
  }

  onIonInfiniteSuspendidos(event: InfiniteScrollCustomEvent) {
    setTimeout(() => {
        this.recuperarSuspendidos();
        event.target.complete();
    }, 500);
      window.location.reload()
  }

  recuperarReportes() {
    this.adminService.getReports(this.reports.length).subscribe({
        next: (data:Report[]) => {
        console.log('Report', data);
        this.reports.push(...data);
        },
        error: (err) => {
            this.router.navigate(['/login']);
        }
    })
  }

    recuperarAvisados() {
    this.adminService.getUserWarnings(this.avisados.length).subscribe({
        next: (data: ProfileWarningBan[]) => {
            console.log('Avisados', data);
            this.avisados.push(...data);
        },
        error: (err) => {
            this.router.navigate(['/login']);
        }
    });
    }

    recuperarSuspendidos() {
        this.adminService.getUserBanned(this.suspendidos.length).subscribe({
            next: (data:ProfileWarningBan[]) => {
            console.log('Suspendidos', data);
            this.suspendidos.push(...data);
            },
            error: (err) => {
                this.router.navigate(['/login']);
            }
        })
    }
}
