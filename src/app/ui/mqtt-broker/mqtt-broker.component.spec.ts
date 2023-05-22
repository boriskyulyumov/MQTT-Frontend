import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttBrokerComponent } from './mqtt-broker.component';

describe('MqttBrokerComponent', () => {
  let component: MqttBrokerComponent;
  let fixture: ComponentFixture<MqttBrokerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MqttBrokerComponent]
    });
    fixture = TestBed.createComponent(MqttBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
