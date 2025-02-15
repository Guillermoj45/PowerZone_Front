import {Component, OnInit} from '@angular/core';
import {CarrouselComponent} from "../../Component/carrousel/carrousel.component";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {RecuperacionServiceService} from "../../Service/recuperacion-service.service";

@Component({
    selector: 'app-recuperacion-previa',
    templateUrl: './recuperacion-previa.component.html',
    styleUrls: ['./recuperacion-previa.component.scss'],
    standalone: true,
    imports: [
        CarrouselComponent,
        FormsModule,
        IonicModule,
        NgIf,
        RouterLink
    ]
})
export class RecuperacionPreviaComponent  implements OnInit {
    email:string= "";
    hecho:boolean = false;
    password:string= "";
    passwordConfident:string= "";
    code:string="";

    constructor(private recu:RecuperacionServiceService, private router:Router) { }

    ngOnInit() {}

    sendEmail() {
        this.recu.sendEmail(this.email).subscribe({
            next: (data) => {

            },
            error: (err) => {
                console.error('Error al enviar el email', err);
            },
            complete: () => {
                this.hecho = true
            }
        });
        this.hecho = true
    }

    sendNewPassword(){
        this.recu.sendNewPassword(this.code, this.password).subscribe({
            next: () => {
                console.log("Hola")
            },
            error: (err) => {
                console.error('Error al enviar el email', err);
            },
        })
        this.router.navigate(['/login']);

    }
}
