import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NotificationService} from "../../Service/NotificationService";
import {MegaNotification} from "../../Models/MegaNotification";
import {NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {Router} from "@angular/router";

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgIf,
    NgForOf
  ]
})
export class NotificationComponent  implements OnInit {
    notifications: MegaNotification[] = [];
    notificationsToday: MegaNotification[] = [];
    notificationsYesterday: MegaNotification[] = [];
    notificationsLast7Days: MegaNotification[] = [];
    notificationsLast10Days: MegaNotification[] = [];

    constructor(
        private notificationService: NotificationService,
        private router: Router
    ) {}

    ngOnInit() {
        this.notificationService.getNotifications().subscribe({
            next: (notifications) => {
                this.notifications = notifications
                this.groupNotifications()
            },
            error: (err) => console.error(err),
            complete: () => console.log('complete')
        })
    }

  groupNotifications(): void {
    const today = new Date();

    this.notifications.forEach(notif => {
      // Convertir el string a Date; asegúrate que notif.date esté en un formato reconocible por el constructor de Date.
      const notifDate = new Date(notif.date.toString());

      // Calculamos la diferencia en milisegundos y luego la convertimos a días
      const diffMs = today.getTime() - notifDate.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        // Notificaciones de hoy
        this.notificationsToday.push(notif);
      } else if (diffDays === 1) {
        // Notificaciones de ayer
        this.notificationsYesterday.push(notif);
      } else if (diffDays > 1 && diffDays <= 7) {
        // Notificaciones de los últimos 7 días (excepto hoy y ayer)
        this.notificationsLast7Days.push(notif);
      } else if (diffDays > 7 && diffDays <= 10) {
        // Notificaciones de los últimos 10 días
        this.notificationsLast10Days.push(notif);
      }
      // Si necesitas agrupar notificaciones más antiguas, puedes agregar otro bloque.
    });
  }
  goToNotification(notification: MegaNotification): void {
      // Dependiendo del tipo de notificación, navega a una ruta distinta.
      // Asegúrate de que las rutas existan en tu módulo de enrutamiento.
      switch (notification.type) {
        case 'MESSAGE':
          // Por ejemplo, redirige a la conversación o mensaje
          //TODO: Reemplazar 'notification.groupMessenger.grupouser.groupId' por la ruta correcta
          this.router.navigate(['/messages', notification.groupMessenger.grupouser.groupId]);
          break;
        case 'NEW_POST':
          // Redirige a la página de detalle del post
          if (notification.postDto?.post?.id?.toString()) {
            this.router.navigate(['/post-details/' + notification.postDto?.post?.id?.toString()]);
          }
          break;
        case 'NEW_LIKE':
          // Puede que también quieras dirigir al detalle del post
          if (notification.postDto?.post?.id?.toString()) {
            this.router.navigate(['/post-details/' + notification.postDto?.post?.id?.toString()]);
          }
          break;
        case 'NEW_FOLLOWER':
          // Redirige al perfil del emisor
          if (notification.emitter.id) {
            this.router.navigate(['/profile/' + notification.emitter.id]);
          }
          break;
        case 'NEW_COMMENT':
          // Redirige al detalle del post o a la sección de comentarios
          if (notification.comment.postId) {
            this.router.navigate(['/post-details/', notification.postDto?.post?.id?.toString()]);
          }
          break;
        default:
          break;
      }
  }


}
