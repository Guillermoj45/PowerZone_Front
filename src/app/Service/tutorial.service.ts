import {Injectable} from '@angular/core';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  intro: any;

  constructor() {
    this.intro = introJs();
  }

  configureSteps() {
    this.intro.setOptions({
      steps: [
        {
          element: '#pantallaPosts',
          intro: 'Bienvenido a POWERZONE tu red social fitness 💪💪. Aquí podrás compartir tus rutinas de entrenamiento, dietas y mucho más. 😀',
        },
        {
          element: '#pantallaPosts',
          intro: 'Esta es la pantalla de inicio, aquí podrás ver los posts de tus amigos y publicar tus propios posts.👀👀',
        },
        {
          element: '#posts',
          intro: 'Aquí podrás ver los posts de tus amigos y publicar tus propios posts.👀',
        },
          {
              element: '#barra-busqueda',
              intro: 'Aquí podrás buscar🔎🔎 por # los posts de tus amigos.',
          },
          {
            element: '#filtro',
            intro: 'Aquí podrás filtrar los posts por mas gustados, comentados o solo por tus seguidores.',
          },
        {
          element: '#like-button',
          intro: 'Puedes darle like❤️ a los posts de tus amigos.',
        },
        {
          element: '#chat',
          intro: 'Puedes comentar💬 los posts de tus amigos.',
        },
        {
          element: '#comentarios',
          intro: 'Aquí podrás ver los comentarios💬 de tus amigos.',
        },
        {
          element: '#guardar',
          intro: 'Puedes guardar🔐 los posts que te gusten.',
        },
        {
          element: '#compartir',
          intro: 'Puedes compartir los posts de tus amigos.',
        },
        {
          element: '#busqueda',
          intro: 'Aqui podrás buscar🔎🔎 usuarios registrados en la aplicación',
        },
          {
              element: '#publicar2',
              intro: 'Aquí podrás publicar tus propios posts.',
          },
        {
          element: '#publicar',
          intro: 'Aquí tambien podrás publicar tus propios posts.',
        },
          {
              element: '#mensajes',
              intro: 'Aquí podrás publicar tus propios posts.',
          },
        {
          element: '#chatbot',
          intro: 'Podrás hablar con nuestra IA fitness, puede hacer rutinas y darte dietas. 🦾🤖🤜🤛👨',
        },
        {
          element: '#notificaciones',
          intro: 'Aquí podrás ver las notificaciones',
        },
        {
          element: '#perfil',
          intro: 'Mira tu perfil, posts, seguidores y seguidos',
        },
        {
          element: '#sugerencias',
          intro: 'Aquí podrás ver sugerencias de usuarios para seguir'
        }
      ],
      showProgress: true,
      showBullets: false,
      disableInteraction: true,
      overlayOpacity: 0.7,
    });
  }

  startTour() {
    console.log('Iniciando el tour...');

    // Esperar hasta que los elementos existan
    setTimeout(() => {
      this.configureSteps();
      this.intro.start();

    }, 500); // Espera 1 segundo para asegurarse de que el DOM está cargado
  }
}
