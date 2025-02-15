import {Injectable} from '@angular/core';


// Import the CloudinaryModule.

// Import the Cloudinary classes.
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';
import {name} from "@cloudinary/url-gen/actions/namedTransformation";

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {

  constructor() { }
  // Create a new Cloudinary instance.
  cld = new Cloudinary({
    cloud: {
      cloudName: 'dflz0gveu'
    }
  });
  // Create a new CloudinaryImage instance.
  getImage(publicId: string, transformation?:string): CloudinaryImage {
    const img = this.cld.image(publicId);

    if (transformation)
      img.namedTransformation(name(transformation));

    return img;
  }
}
