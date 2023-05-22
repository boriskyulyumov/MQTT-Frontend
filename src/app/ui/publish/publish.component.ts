import { Component } from '@angular/core';
import {MqttService} from "../../mqtt-service";

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent {


  constructor(private mqttService : MqttService) {
  }

  publish(){

  }


}
