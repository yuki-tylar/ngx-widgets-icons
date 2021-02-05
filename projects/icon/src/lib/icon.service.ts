import { Type } from '@angular/core';
import { Injectable } from '@angular/core';

import{ IconLockComponent } from './icon-lock/icon-lock.component';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }

  getIcon(name: IconName){
    let icon: IconItem;
    switch(name){
      case 'lock': icon = new IconItem( IconLockComponent ); break;
      default: icon = new IconItem( IconLockComponent );
    }
    return icon;
  }
}

export type IconName = 'lock';

class IconItem {
  constructor(public component: Type<any>){}
}

export interface IconItemComponent {
  data: IconData;
}

export interface IconData {
  state: 'on' | 'off';
}