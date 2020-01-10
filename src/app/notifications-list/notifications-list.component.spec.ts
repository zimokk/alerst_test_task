import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsListComponent } from './notifications-list.component';
import { NotificationListItemComponent } from './notification-list-item/notification-list-item.component';
import { NotificationTemistampComponent } from './notification-list-item/notification-temistamp/notification-temistamp.component';
import { StatusIconDirective } from './notification-list-item/status-icon/status-icon.directive';
import { ConnectionService } from '../services/connection.service';
import { NotificationsService } from '../services/notifications.service';

describe('NotificationsListComponent', () => {
  let component: NotificationsListComponent;
  let fixture: ComponentFixture<NotificationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotificationsListComponent,
        NotificationListItemComponent,
        NotificationsListComponent,
        NotificationTemistampComponent,
        StatusIconDirective,
      ],
      providers: [ ConnectionService, NotificationsService ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
