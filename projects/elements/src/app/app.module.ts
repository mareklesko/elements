import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule, ComponentsComponent } from 'components';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule
  ],
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(ComponentsComponent, { injector: this.injector })
    customElements.define("lib-components", element);
  }
}
