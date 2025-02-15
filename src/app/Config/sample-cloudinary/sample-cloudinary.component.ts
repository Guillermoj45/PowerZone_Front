import {Component, OnInit} from '@angular/core';
import {CloudinaryModule} from "@cloudinary/ng";
import {CloudinaryImage} from "@cloudinary/url-gen";
import {CloudinaryService} from "../../Service/Cloudinary.service";
import {IonicModule} from "@ionic/angular";


@Component({
  selector: 'app-sample-cloudinary',
  templateUrl: './sample-cloudinary.component.html',
  styleUrls: ['./sample-cloudinary.component.scss'],
  imports: [CloudinaryModule, IonicModule],
  standalone: true,
})
export class SampleCloudinaryComponent  implements OnInit {
  img!: CloudinaryImage; // declaramos la variable img de tipo CloudinaryImage

  constructor(private clou:CloudinaryService)// creamos el objeto de la clase CloudinaryService
  {}

  ngOnInit() {
    this.img = this.clou.getImage('powerzone/t0ypf6pimx4yep0xxqeh.png'); // asignamos a la variable img la imagen que queremos mostrar
    // this.img = this.clou.getImage('powerzone/t0ypf6pimx4yep0xxqeh.png', 'Hola'); // Si queremos aplicar alguna transformación a la imagen,
    // las trasformaciones se deben crear en la pagina de cloudinary y sirve para recortar las imagenes hacer zoom etc

    console.log(this.img.toURL()); // mostramos en consola la url de la imagen
  }

}
