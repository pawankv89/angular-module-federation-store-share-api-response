import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'albums', component: AlbumsComponent},
  {
    path: 'photos',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: environment.photosRemote.url,
        exposedModule: environment.photosRemote.module,
        remoteName: environment.photosRemote.name
      }).then((m) => m.PhotosModule)
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
