import { Post } from './Post';

export class PostDto {
    post?: Post;
    imagePost?: string;
    avatar?: string;
    nickname?: string;
    numlikes?: number;
    numcomments?: number;
    avatarComment?: string;
    nicknameComment?: string;
    firstcomment?: string;
}
