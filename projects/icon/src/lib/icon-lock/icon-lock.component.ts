import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes} from '@angular/animations'


const unlockAnimation = trigger('unlock', [
  state('lock', style({})),
  state('unlock', style({transform: 'translateY(-1px) rotateY(180deg)'})),
  transition('lock=>unlock', [
    animate('400ms ease', keyframes([
      style({transform: 'translate(0)', offset: 0}),
      style({transform: 'translateY(-1px)', offset: 0.25}),
      style({transform: 'translateY(-1px) rotateY(180deg)', offset: 1})
    ]))
  ]),
  transition('unlock=>lock', [
    animate('400ms ease', keyframes([
      style({transform: 'translateY(-1px) rotateY(180deg)', offset: 0}),
      style({transform: 'translateY(-1px)', offset: 0.75}),
      style({transform: 'translate(0)', offset: 1}),
    ]))
  ])
]);

@Component({
  selector: 'ngx-icon-lock',
  templateUrl: './icon-lock.component.html',
  styleUrls: ['./icon-lock.component.scss'],
  animations: [unlockAnimation]
})
export class IconLockComponent implements OnInit {

  @Input() state?: 'on' | 'off';

  public isLocked: boolean = true;

  constructor() { }

  ngOnChanges(e: SimpleChanges){
    if(e.state && e.state.currentValue != e.state.previousValue){
      this.isLocked = (this.state == 'on')? false : true;
    }
  }

  ngOnInit(): void {
    this.isLocked = (this.state == 'on')? false : true;
  }
  
}
