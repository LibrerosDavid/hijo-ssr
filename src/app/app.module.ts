import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {createCustomElement} from '@angular/elements';
import {SampleComponent} from './sample/sample.component';
import {SampleModule} from './sample/sample.module';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';

const local = false;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SampleModule
  ],
  providers: [],
  entryComponents: [SampleComponent],
  bootstrap: [local ? AppComponent : []]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
    const micro = createCustomElement(SampleComponent, {injector: this.injector})
    customElements.define('micro-app', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {}
}