import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ComponentsComponent {

  @Output('clicked') clicked = new EventEmitter();
  listItems = [{
    text: 'Cars',
    badge: '12'
  }, {
    text: 'Bikes',
    badge: '5'
  }];
  click() {
    this.clicked.emit();
  }
}
