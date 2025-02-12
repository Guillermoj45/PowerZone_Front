
export class Profile {
    name?: string;
    email?: string;
    avatar?: string;
    birthdate?: string;
}

export class ProfileMessenger {
    name: string;
    email: string;
    avatar: string;
    bornDate: string;
    nickName: string;
    id: string;

    constructor(name: string, email: string, avatar: string, bornDate: string, nickName: string, id: string) {
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.bornDate = bornDate;
        this.nickName = nickName;
        this.id = id;
    }
}
