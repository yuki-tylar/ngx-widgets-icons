import { Type } from '@angular/core';
import { Injectable } from '@angular/core';
import{ IconLockComponent } from './icon-lock/icon-lock.component';
import { IconEmailComponent } from './icon-email/icon-email.component';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }

  getIcon(name: string){
    let icon: IconItem;
    switch(name){
      case 'email': icon = new IconItem( IconEmailComponent ); break;
      case 'lock': icon = new IconItem( IconLockComponent ); break;
      default: icon = new IconItem( IconLockComponent );
    }
    return icon;
  }
}

class IconItem {
  constructor(public component: Type<any>){}
}

export interface IconItemComponent {
  data: IconData;
}

export interface IconData {
  state: 'on' | 'off';
}