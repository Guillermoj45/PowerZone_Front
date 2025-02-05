import { Placement as PopperPlacement } from '@popperjs/core';

export const defaultStepOptions = {
    scrollTo: true,
    showCancelLink: true,
    useModalOverlay: true,
};

export const steps = [
    {
        id: 'step-1',
        title: 'Explora la Sección de Posts',
        text: 'Aquí puedes ver todos los posts recientes y populares.',
        attachTo: { element: '.component-container', on: 'bottom' as PopperPlacement },
        buttons: [
            {
                text: 'Siguiente',
                action: function(this: any, ...args: any[]): void {
                    this.next();
                },
            },
        ],
    },
    {
        id: 'step-2',
        title: 'Detalles del Post',
        text: 'Haz clic en un post para ver más detalles y comentarios.',
        attachTo: { element: '.post-description', on: 'top' as PopperPlacement },
        buttons: [
            {
                text: 'Siguiente',
                action: function(this: any, ...args: any[]): void {
                    this.next();
                },
            },
        ],
    },
    {
        id: 'step-3',
        title: 'Apoya a los Creadores',
        text: 'Puedes dar like a un post haciendo clic en el ícono de corazón.',
        attachTo: { element: '.like-button', on: 'left-start' as PopperPlacement },
        buttons: [
            {
                text: 'Siguiente',
                action: function(this: any, ...args: any[]): void {
                    this.next();
                },
            },
        ],
    },
    {
        id: 'step-4',
        title: 'Guarda tus Favoritos',
        text: 'Guarda un post para verlo más tarde haciendo clic en el ícono de guardar.',
        attachTo: { element: '.save-button', on: 'left-start' as PopperPlacement },
        buttons: [
            {
                text: 'Siguiente',
                action: function(this: any, ...args: any[]): void {
                    this.next();
                },
            },
        ],
    },
    {
        id: 'step-5',
        title: 'Navega con Facilidad',
        text: 'Utiliza la barra lateral izquierda para acceder rápidamente a diferentes secciones.',
        attachTo: { element: '.component-container', on: 'left-start' as PopperPlacement },
        buttons: [
            {
                text: 'Siguiente',
                action: function(this: any, ...args: any[]): void {
                    this.next();
                },
            },
        ],
    },
    {
        id: 'step-6',
        title: 'Encuentra Usuarios',
        text: 'Busca usuarios registrados en la aplicación utilizando la barra de búsqueda.',
        attachTo: { element: '.component-container', on: 'left-start' as PopperPlacement },
        buttons: [
            {
                text: 'Siguiente',
                action: function(this: any, ...args: any[]): void {
                    this.next();
                },
            },
        ],
    },
    {
        id: 'step-7',
        title: 'Publica tu Contenido',
        text: 'Publica un nuevo post haciendo clic en el botón de publicar. Puedes añadir un título y una imagen o video.',
        attachTo: { element: '.component-container', on: 'left-start' as PopperPlacement },
        buttons: [
            {
                text: 'Siguiente',
                action: function(this: any, ...args: any[]): void {
                    this.next();
                },
            },
        ],
    },
    {
        id: 'step-8',
        title: 'Recomendaciones de Salud',
        text: 'Prueba nuestro chatBot para obtener recomendaciones personalizadas de comida y ejercicios.',
        attachTo: { element: '.component-container', on: 'left-start' as PopperPlacement },
        buttons: [
            {
                text: 'Siguiente',
                action: function(this: any, ...args: any[]): void {
                    this.next();
                },
            },
        ],
    },
    {
        id: 'step-9',
        title: 'Mantente Informado',
        text: 'Revisa las notificaciones para estar al tanto de likes, comentarios y nuevos seguidores.',
        attachTo: { element: '.component-container', on: 'left-start' as PopperPlacement },
        buttons: [
            {
                text: 'Siguiente',
                action: function(this: any, ...args: any[]): void {
                    this.next();
                },
            },
        ],
    },
    {
        id: 'step-10',
        title: 'Gestiona tu Perfil',
        text: 'Edita tu información personal y revisa tus posts en la sección de perfil.',
        attachTo: { element: '.component-container', on: 'left-start' as PopperPlacement },
        buttons: [
            {
                text: 'Siguiente',
                action: function(this: any, ...args: any[]): void {
                    this.next();
                },
            },
        ],
    },
    {
        id: 'step-11',
        title: 'Configura tu Experiencia',
        text: 'Ajusta la configuración de tu cuenta y personaliza la aplicación a tu gusto.',
        attachTo: { element: '.component-container', on: 'left-start' as PopperPlacement },
        buttons: [
            {
                text: 'Siguiente',
                action: function(this: any, ...args: any[]): void {
                    this.next();
                },
            },
        ],
    },
    {
        id: 'step-12',
        title: 'Conéctate con Otros',
        text: 'Explora las sugerencias de amigos y comienza a chatear con otros usuarios.',
        attachTo: { element: '.component-container', on: 'right-start' as PopperPlacement },
        buttons: [
            {
                text: 'Finalizar',
                action: function(this: any, ...args: any[]): void {
                    this.complete();
                },
            },
        ],
    },
];
