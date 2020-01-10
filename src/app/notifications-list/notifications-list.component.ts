import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Notification } from '../shared/notification';
import { Observable } from 'rxjs';
import { GROUPS_HEADERS } from '../shared/const';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss'],
})
export class NotificationsListComponent implements OnInit {
  private list: Observable<Notification[][]>;
  GROUPS_HEADERS: string[] = GROUPS_HEADERS;

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {
    this.list = this.notificationsService.listObservable;
  }

  removeNotification(notification: Notification): void {
    this.notificationsService.removeNotification(notification);
  }
}
