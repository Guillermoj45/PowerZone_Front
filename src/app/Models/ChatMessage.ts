export class ChatMessage {
    sender!: string;    // Nombre del usuario que envía el mensaje
    content!: string;   // Contenido del mensaje
    timestamp!: number; // Marca de tiempo del mensaje
    groupId!: string;   // ID del grupo (sala)
}
