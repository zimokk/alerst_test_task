import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Notification } from '../../shared/notification';

@Component({
  selector: 'app-notification-list-item',
  templateUrl: './notification-list-item.component.html',
  styleUrls: ['./notification-list-item.component.scss'],
})
export class NotificationListItemComponent {
  @Input() notification: Notification;
  @Output() removeEvent = new EventEmitter<Notification>();

  remove(): void {
    this.removeEvent.emit(this.notification);
  }
}
