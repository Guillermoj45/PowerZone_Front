import { Image } from './Image';

export class Post{
    id?: number;
    content?: string;
    created_at?: Date;
    user_id?: number;
    delete?: boolean;
    imagePost?: string;
}
