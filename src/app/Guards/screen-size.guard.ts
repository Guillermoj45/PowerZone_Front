import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ScreenSizeGuard implements CanActivate {
    canActivate(): boolean {
        const screenWidth = window.innerWidth; // Obtener el ancho de la ventana
        if (screenWidth <= 1000) {
            return true; // Permitir acceso si el ancho es <= 1000px
        } else {
            alert('Esta vista solo está disponible en dispositivos móviles.');
            return false; // Bloquear acceso si el ancho es > 1000px
        }
    }
}
