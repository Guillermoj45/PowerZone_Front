import {Profile} from "./Profile";

export class PostDetails {
  profile: Profile = new Profile();
  id: number = 0;
  decription: string = '';
  image: string = '';
  likes: number = 0;
  numComments: number = 0;
  comments: {
    profile: Profile,
    comment: string
  }[] = [];
}
