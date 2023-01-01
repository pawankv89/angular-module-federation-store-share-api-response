import { Injectable } from '@angular/core';
import { RemoteService } from '..';

const ALBUMS_BASE_URL = 'https://jsonplaceholder.typicode.com/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private remoteService: RemoteService) { }

  getAlbumsList() {
    return this.remoteService.get(ALBUMS_BASE_URL);
  }
}
