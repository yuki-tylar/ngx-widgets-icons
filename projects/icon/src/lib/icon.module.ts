import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { IconLockComponent } from './icon-lock/icon-lock.component';



@NgModule({
  declarations: [
    IconLockComponent,
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    IconLockComponent,
  ]
})
export class IconModule { }
