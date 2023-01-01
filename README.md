
# angular-module-federation-store-share-api-response

## angular-module-federation-shell and photos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

How to Build Micro Frontends Using Module Federation in Angular

```xml
ng add @angular-architects/module-federation

"@angular-architects/module-federation": "12.0.0",

    "@ngrx/component-store": "11.0.1",
    "@ngxs/devtools-plugin": "^3.7.1",
    "@ngxs/form-plugin": "3.7.1",
    "@ngxs/router-plugin": "3.7.1",
    "@ngxs/store": "3.7.1"

import { Component, OnInit } from '@angular/core';
import { PhotosFacade } from '@spa/shared-services';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private photosFacade: PhotosFacade) { }

  listItems: any = [];
  listItemHeaders: any = [];

  ngOnInit(): void {

    // Refresh Request First Time
    this.refreshRequest();

    // Get Photos List
    setTimeout(() => {
      this.getPhotosFacade();
    }, 1000);
    
  }

  getPhotosFacade() {
    this.photosFacade.photoDetails$.subscribe((photos: any) => {
      //console.log('photos response ', photos);
      if(photos){
        if (photos?.length > 0) {
          this.listItems = photos;
          this.listItemHeaders = Object.keys(this.listItems[0]);
        }
      }
    })
 }

 // Refresh Request First Time
 refreshRequest() {
  this.photosFacade.load();
 }

}


```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```xml
for both repo
1) angular-module-federation-shell % ng serve
2) photos % ng serve
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Links

```xml

https://github.com/adrobson/angulardemo-part8/blob/master/src/app/store/state/financials.state.ts
https://github.com/ngxs/store
https://www.ngxs.io/concepts/select
https://medium.com/@alistairrobson_36819/how-to-implement-state-management-using-ngxs-with-angular-9-and-dot-net-core-3-1-7f2d3db9811d
https://christianlydemann.com/ngrx-industry-best-practices/
https://www.ngxs.io/advanced/shared-state
https://stackoverflow.com/questions/69832905/ngxs-state-returns-object-instead-of-actual-data
https://timdeschryver.dev/blog/sharing-data-between-modules-is-peanuts#here-are-some-more-resources-if-you-want-to-know-more
https://github.com/timdeschryver/ngrx-family-grocery-list

```