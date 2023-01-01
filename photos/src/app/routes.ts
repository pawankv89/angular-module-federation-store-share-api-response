import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./photos/photos.module').then((m) => m.PhotosModule),
  }
];
