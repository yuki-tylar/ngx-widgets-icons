import { Component, OnInit, Input, ComponentRef, ComponentFactoryResolver, ViewChild, ChangeDetectorRef, SimpleChanges} from '@angular/core';
import { IconHostDirective } from './icon-host.directive';
import { IconService, IconName, IconItemComponent, IconData } from './icon.service';

@Component({
  selector: 'ngx-icon',
  template: '<ng-template iconHost></ng-template>',
  styles: [
    ':host{ font-size: 1em; color: inherit; }',
  ]
})
export class IconComponent implements OnInit {

  @Input() icon: IconName = 'lock';
  @Input() state: IconData['state'] = 'off';

  @ViewChild(IconHostDirective, {static: false}) iconHost!: IconHostDirective;

  private componentRef!: ComponentRef<IconItemComponent>;

  constructor(
    private iconService: IconService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetecotr: ChangeDetectorRef,
  ) { }

  ngOnChanges(e: SimpleChanges){
    if(e.state && !e.state.firstChange){
      this.changeState(this.state);
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(){
    this.loadComponent(this.state);
  }
  
  loadComponent(state: IconData['state']){
    const item = this.iconService.getIcon(this.icon);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
    const viewContainerRef = this.iconHost.viewContainerRef
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent<IconItemComponent>(componentFactory);
    this.componentRef.instance.data = {state: state};
    this.changeDetecotr.detectChanges();
  }

  changeState(state: IconData['state']){
    this.componentRef.instance.data.state = state;
  }
}
