import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  standalone: true,
})
export class CarrouselComponent  implements OnInit {
 images: String[] = [
    'assets/img/inicio.png',
    'assets/img/rutinas.png',
    'assets/img/ejercicios.png',
    'assets/img/editar.png'
   ];

 currentIndex = 0;

  constructor() { }

  ngOnInit() {
    this.startCarousel()
  }

  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // Cambia de imagen cada 5 segundos
  }

}
