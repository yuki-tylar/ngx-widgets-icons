import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { IconLockComponent } from './icon-lock/icon-lock.component';
import { IconComponent } from './icon.component';
import { IconHostDirective } from './icon-host.directive';



@NgModule({
  declarations: [
    IconLockComponent,
    IconComponent,
    IconHostDirective,
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    IconComponent,
    IconLockComponent,
  ]
})
export class IconModule { }
