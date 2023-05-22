import { Component } from '@angular/core';
import {MqttService} from "../../mqtt-service";

@Component({
  selector: 'app-mqtt-broker',
  templateUrl: './mqtt-broker.component.html',
  styleUrls: ['./mqtt-broker.component.css']
})
export class MqttBrokerComponent {

  constructor(private mqttService : MqttService) {
  }

  connect() {
    this.mqttService.connect();
  }
}
