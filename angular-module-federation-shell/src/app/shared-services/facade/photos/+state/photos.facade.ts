import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, interval } from 'rxjs';

import { PhotosModel, PhotosState} from './photos.state';
import { PhotosActions } from './photos.actions';

@Injectable()
export class PhotosFacade {
  @Select(PhotosState) photosState$!: Observable<PhotosModel>;
  @Select(PhotosState.photoDetails) photoDetails$!: Observable<any>;
  @Select(PhotosState.albumDetails) albumDetails$!: Observable<any>;

  constructor(private store: Store) {}

  getphotoDetails() {
    this.store.dispatch(PhotosActions.GetPhotosDetails);
  }

  getAlbumDetails() {
    this.store.dispatch(PhotosActions.GetAlbumDetails);
  }

  load() {
    this.getphotoDetails();
    this.getAlbumDetails();
  }
}
