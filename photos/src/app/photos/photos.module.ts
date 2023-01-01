import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { RouterModule } from '@angular/router';
import { photosRoutes } from './routes';
import { SharedServicesModule } from '@spa/shared-services';

@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(photosRoutes),
    SharedServicesModule
  ]
})
export class PhotosModule { }
