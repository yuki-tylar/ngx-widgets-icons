import { Component, OnInit, Input, SimpleChanges, ElementRef } from '@angular/core';
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

  @Input() state?: string;

  public isLocked: boolean = true;
  public fill: string = 'inherit';

  private host: HTMLElement;

  constructor(_el: ElementRef) { this.host = _el.nativeElement; }

  ngOnChanges(e: SimpleChanges){
    if(e.state && e.state.currentValue != e.state.previousValue){
      this.isLocked = (this.state == 'on')? false : true;
    }
  }

  ngOnInit(): void {
    this.isLocked = (this.state == 'on')? false : true;
    this.fill = window.getComputedStyle(this.host).color;
  }
}
