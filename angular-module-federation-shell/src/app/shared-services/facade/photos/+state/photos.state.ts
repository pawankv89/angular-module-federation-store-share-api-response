import { Injectable } from '@angular/core';
import { State, Action, StateContext, StateToken, Selector } from '@ngxs/store';

import { PhotosActions } from './photos.actions';
import { PhotosService } from '../photos.service';
import { tap, map } from 'rxjs/operators';

export interface PhotosModel {
    photoDetails: any;
    albumDetails: any;
}

export const PHOTOS_STATE_TOKEN = new StateToken<PhotosModel>('photos');

const defaults = {
  photoDetails: null,
  albumDetails: null
};

@State<PhotosModel>({
  name: PHOTOS_STATE_TOKEN,
  defaults
})
@Injectable()
export class PhotosState {
  @Selector()
  static photoDetails(state: PhotosModel) {
    return state.photoDetails;
  }
  @Selector()
  static albumDetails(state: PhotosModel) {
    return state.albumDetails;
  }

  constructor(private userService: PhotosService) {}

  @Action(PhotosActions.GetPhotosDetails)
  getphotoDetails(ctx: StateContext<PhotosModel>, action: PhotosActions.GetPhotosDetails) {
    return this.userService.getPhotosList().pipe(
      tap((photoDetails) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          photoDetails
        });
      })
    );
  }

  @Action(PhotosActions.GetAlbumDetails)
  getAlbumDetails(ctx: StateContext<PhotosModel>, action: PhotosActions.GetAlbumDetails) {
    return this.userService.getAlbumsList().pipe(
      tap((albumDetails) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          albumDetails
        });
      })
    );
  }
}
