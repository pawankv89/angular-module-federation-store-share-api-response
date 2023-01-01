import { Component, OnInit } from '@angular/core';
import { PhotosFacade } from '@spa/shared-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Shell App';

  constructor(private photosFacade: PhotosFacade) {}

  ngOnInit(): void {

    // Load Details
    this.photosFacade.load();

    // Get Details
    //this.getPhotosFacade();
  }

  getPhotosFacade() {
    // Get Albums List
    this.photosFacade.albumDetails$.subscribe((albums)=>{
     console.log('albums userFacade ', albums);
   })

    // Get Users 
   this.photosFacade.photoDetails$.subscribe((users)=>{
     console.log('users userFacade ', users);
   })
 }

}
