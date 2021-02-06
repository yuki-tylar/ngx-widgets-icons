import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { IconLockComponent } from './icon-lock/icon-lock.component';
import { IconComponent } from './icon.component';
import { IconHostDirective } from './icon-host.directive';
import { IconEmailComponent } from './icon-email/icon-email.component';



@NgModule({
  declarations: [
    IconHostDirective,
    IconComponent,
    IconLockComponent,
    IconEmailComponent,
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    IconComponent,
    IconLockComponent,
    IconEmailComponent,
  ],
  entryComponents: [
    IconLockComponent,
    IconEmailComponent,
  ]
})
export class IconModule { }
