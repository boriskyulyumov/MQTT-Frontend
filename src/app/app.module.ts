import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MqttExampleComponentComponent } from './mqtt-example-component/mqtt-example-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MqttExampleComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
