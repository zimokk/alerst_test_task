import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationListItemComponent } from './notification-list-item.component';
import { StatusIconDirective } from './status-icon/status-icon.directive';
import { NotificationTemistampComponent } from './notification-temistamp/notification-temistamp.component';

import { Notification } from '../../shared/notification';

describe('NotificationListItemComponent', () => {
  let component: NotificationListItemComponent;
  let fixture: ComponentFixture<NotificationListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationListItemComponent, StatusIconDirective, NotificationTemistampComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationListItemComponent);
    component = fixture.componentInstance;
    component.notification = new Notification({}, 30);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
