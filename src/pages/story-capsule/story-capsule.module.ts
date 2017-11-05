import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoryCapsulePage } from './story-capsule';

@NgModule({
  declarations: [
    StoryCapsulePage,
  ],
  imports: [
    IonicPageModule.forChild(StoryCapsulePage),
  ],
})
export class StoryCapsulePageModule {}
