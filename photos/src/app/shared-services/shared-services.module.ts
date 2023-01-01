import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotosFacade } from './facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
   providers: [
    PhotosFacade
  ],
})
export class SharedServicesModule {}
