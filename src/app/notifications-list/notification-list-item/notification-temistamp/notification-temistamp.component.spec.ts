import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTemistampComponent } from './notification-temistamp.component';
import { TIME_VALUES } from '../../../shared/const';

describe('NotificationTemistampComponent', () => {
  let component: NotificationTemistampComponent;
  let fixture: ComponentFixture<NotificationTemistampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationTemistampComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationTemistampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct time delay value', () => {
    component.timestamp = 1578649575667;
    component.ngOnChanges();

    expect('1/10/2020').toEqual(component.createdText);

    component.timestamp = new Date().getTime();
    component.groupIndex = 0;
    component.ngOnChanges();

    expect(TIME_VALUES.recent).toEqual(component.createdText);

    component.delayValue = 180;
    component.groupIndex = 1;
    component.ngOnChanges();

    expect(2 + TIME_VALUES.minutes).toEqual(component.createdText);
    console.log(component.createdText);
  });
});
