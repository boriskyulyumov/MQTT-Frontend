import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MqttExampleComponentComponent } from './mqtt-example-component/mqtt-example-component.component';
import { MqttBrokerComponent } from './ui/mqtt-broker/mqtt-broker.component';
import { PublishComponent } from './ui/publish/publish.component';
import { SubscribeComponent } from './ui/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    MqttExampleComponentComponent,
    MqttBrokerComponent,
    PublishComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
