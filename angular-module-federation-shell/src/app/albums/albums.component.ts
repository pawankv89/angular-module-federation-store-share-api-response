import { Component, OnInit } from '@angular/core';
import { PhotosFacade } from '@spa/shared-services';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(private photosFacade: PhotosFacade) { }

  listItems: any = [];
  listItemHeaders: any = [];

  ngOnInit(): void {

    // Get Albums List
    this.photosFacade.albumDetails$.subscribe((albums) => {
      //console.log('albums ', albums);
      if(albums){
        if (albums?.length > 0) {
          this.listItems = albums;
          this.listItemHeaders = Object.keys(this.listItems[0]);
        }
      }
    })
  }
}
