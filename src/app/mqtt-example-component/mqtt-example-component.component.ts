import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {MqttService} from "../mqtt-service";


@Component({
  selector: 'app-mqtt-example-component',
  templateUrl: './mqtt-example-component.component.html',
  styleUrls: ['./mqtt-example-component.component.css']
})
export class MqttExampleComponentComponent implements OnInit, OnDestroy{

  connected = false;
  subscription: Subscription | undefined;
  messages: string[] = [];

  constructor(private mqttService: MqttService) {}

  ngOnInit(): void {
    this.subscription = this.mqttService.connect().subscribe(
      (connected: boolean) => {
        this.connected = connected;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  sendMessage(topic: string, payload: string) {
    this.mqttService.sendMessage(topic, payload);
  }
}
