import { Post } from './Post';

export class PostDto {
    post?: Post;
    image_post?: string;
    avatar?: string;
    nickname?: string;
    numlikes?: number;
    numcomments?: number;
    avatarcomment?: string;
    nicknameComment?: string;
    firstcomment?: string;
}
