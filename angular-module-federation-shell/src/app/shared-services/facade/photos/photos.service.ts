import { Injectable } from '@angular/core';
import { RemoteService } from '@spa/shared-services';

const PHOTOS_BASE_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_BASE_URL = 'https://jsonplaceholder.typicode.com/albums';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private remoteService: RemoteService) { }

  getPhotosList() {
    return this.remoteService.get(PHOTOS_BASE_URL);
  }
  getAlbumsList() {
    return this.remoteService.get(ALBUMS_BASE_URL);
  }
}