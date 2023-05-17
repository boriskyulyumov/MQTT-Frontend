import { Injectable } from '@angular/core';
import { Client, Message } from 'paho-mqtt';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MqttService {
  private client: Client;
  private connectSubject: Subject<boolean>;

  constructor() {
    this.client = new Client('wss://test.mosquitto.org:8081/mqtt', 'clientId-1');
    this.connectSubject = new Subject<boolean>();
  }

  connect(): Observable<boolean> {
    const onConnect = () => {
      console.log('connected: ' , this.client);
      this.connectSubject.next(true);
    };

    this.client.connect({
      onSuccess: onConnect,
      onFailure: (responseObject: Object) => {
        console.log('failed to connect', responseObject);
        this.connectSubject.next(false);
      }
    });

    return this.connectSubject.asObservable();
  }

  disconnect() {
    this.client.disconnect();
  }

  sendMessage(topic: string, payload: string) {
    const message = new Message(payload);
    message.destinationName = topic;
    this.client.send(message);
  }
}
