import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { RouterModule } from '@angular/router';
import { albumsRoutes } from './routes';
import { SharedServicesModule } from '@spa/shared-services';

@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(albumsRoutes),
    SharedServicesModule
  ]
})
export class AlbumsModule { }
