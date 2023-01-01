import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

export interface PhotosModel {
  photoDetails: any;
  albumDetails: any;
}

// TODO: Types
export namespace PhotosActions {
  export class GetPhotosDetails {
    static readonly type = '[Photos] GetPhotosDetails';
    constructor(){}
  }
  export class GetAlbumDetails {
    static readonly type = '[Photos] GetAlbumDetails';
    constructor(){}
  }
}

@Injectable({ providedIn: 'root' })
export class PhotosFacade {
 photosState$!: Observable<PhotosModel>;
 photoDetails$!: Observable<any>;
 albumDetails$!: Observable<any>;

  constructor(private store: Store) {
    this.photosState$ = this.store.select((state) => state?.photos);
    this.photoDetails$ = this.store.select(
      (state) => state?.photos?.photoDetails
    );
    this.albumDetails$ = this.store.select(
      (state) => state?.photos?.albumDetails
    );
  }

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
