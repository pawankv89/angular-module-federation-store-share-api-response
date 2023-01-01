import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosState } from './+state/photos.state';
import { PhotosService } from './photos.service';
import { PhotosFacade } from './+state/photos.facade';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,  
    NgxsModule.forRoot([PhotosState],
       {
        developmentMode: !environment.production
      }),
      NgxsReduxDevtoolsPluginModule.forRoot()
    ],
  providers: [PhotosService, PhotosFacade]
})
export class PhotosModule {}
