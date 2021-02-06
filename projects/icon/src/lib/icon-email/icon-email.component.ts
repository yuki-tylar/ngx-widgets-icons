import { Component, OnInit, Input, SimpleChanges, ElementRef } from '@angular/core';
import { IconItemComponent, IconData } from '../icon.service';

@Component({
  selector: 'ngx-icon-email',
  templateUrl: './icon-email.component.html',
  styleUrls: ['./icon-email.component.scss']
})
export class IconEmailComponent implements OnInit, IconItemComponent {

  @Input() data: IconData = {state: 'off'}; /** used when this component is created dynamically by IconComponent*/
  @Input() state?: 'on' | 'off'; /** used to change state manually by user */

  public fill!: string;

  get isOpen(){ return (this.data.state == 'off') ? false : true; }

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
