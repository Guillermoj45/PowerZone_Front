import {ProfileMessenger} from "./Profile";
import {PostDto} from "./PostDto";

export class MegaNotification {

    // genericas
    id:number;
    receiver: ProfileMessenger;
    emitter: ProfileMessenger;
    date: String;
    type: String;

    // para el chat
    groupMessenger?: any;

    // Post Like
    postDto?: PostDto;

    // new follower
    follower?: ProfileMessenger;

    // new comment
    comment?: any;


    constructor(id:number, reciver: ProfileMessenger, sender: ProfileMessenger, date: String, type: String, groupMessenger?: any, postDto?: PostDto, follower?: ProfileMessenger, comment?: String) {
        this.id = id;
        this.receiver = reciver;
        this.emitter = sender;
        this.date = date;
        this.type = type;
        this.groupMessenger = groupMessenger;
        this.postDto = postDto;
        this.follower = follower;
        this.comment = comment;
    }
}
