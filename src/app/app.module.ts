import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnectionService } from './services/connection.service';
import { NotificationsService } from './services/notifications.service';
import { NotificationListItemComponent } from './notifications-list/notification-list-item/notification-list-item.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { NotificationTemistampComponent }
  from './notifications-list/notification-list-item/notification-temistamp/notification-temistamp.component';
import { StatusIconDirective } from './notifications-list/notification-list-item/status-icon/status-icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsListComponent,
    NotificationListItemComponent,
    NotificationsListComponent,
    NotificationTemistampComponent,
    StatusIconDirective,
  ],
  imports: [BrowserModule],
  providers: [ConnectionService, NotificationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
