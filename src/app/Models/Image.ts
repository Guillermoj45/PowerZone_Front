import {Post} from "./Post";


export interface Image {
    id: number;
    image: string;
    type: string;
    postCreatedAt: Date;
    post: Post;
}
