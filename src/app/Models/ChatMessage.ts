export class ChatMessage {
    sender!: string;    // Nombre del usuario que envía el mensaje
    content!: string;   // Contenido del mensaje
    timestamp!: number; // Marca de tiempo del mensaje
    groupId!: number;   // ID del grupo (sala)
    userId!: string;    // Aquí se cambia 'userId' para usar 'username' o 'id' como se requiera
}
