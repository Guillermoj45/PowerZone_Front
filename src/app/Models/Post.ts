import {Profile} from "./Profile";

export class Post {
  profile: Profile = new Profile();
  id: number = 0;
  decription: string = '';
  likes: number = 0;
  numComments: number = 0;
  comments: {
    profile: Profile,
    comment: string
  }[] = [];
}
