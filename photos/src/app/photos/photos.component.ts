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
