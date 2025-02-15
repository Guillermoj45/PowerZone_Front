import {Post} from "./Post";

export class PostDetails {
    post?: Post;
    image_post?: string;
    avatar?: string;
    nickname?: string;
    numlikes?: number;
    numcomments?: number;
    avatarcomment?: string;
    nicknamecomment?: string;
    firstcomment?: string;
    liked?: boolean;
    saved?: boolean;
    created_at?: Date;
}
