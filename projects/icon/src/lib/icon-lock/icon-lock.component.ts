import { Component, OnInit, Input, SimpleChanges, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes} from '@angular/animations'
import { IconItemComponent, IconData } from '../icon.service';

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
export class IconLockComponent implements OnInit, IconItemComponent {

  @Input() data: IconData = {state: 'off'}; /** used when this component is created dynamically by IconComponent*/
  @Input() state?: 'on' | 'off'; /** used to change state manually by user */

  public fill!: string;


  get isLocked(){ return (this.data.state == 'off') ? true : false; }
  private host: HTMLElement;

  constructor(
    _el: ElementRef,
  ) { this.host = _el.nativeElement; }

  ngOnChanges(e: SimpleChanges){
    if(e.state && !e.state.firstChange && this.state !== undefined){
      this.data.state = this.state;
    }
  }

  ngOnInit(): void {
    if(this.state !== undefined){ this.data.state = this.state; }
  }

  ngAfterContentChecked(){
    this.fill = window.getComputedStyle(this.host).color;
  }
}
