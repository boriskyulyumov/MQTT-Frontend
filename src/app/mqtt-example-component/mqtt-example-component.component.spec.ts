import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttExampleComponentComponent } from './mqtt-example-component.component';

describe('MqttExampleComponentComponent', () => {
  let component: MqttExampleComponentComponent;
  let fixture: ComponentFixture<MqttExampleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MqttExampleComponentComponent]
    });
    fixture = TestBed.createComponent(MqttExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
