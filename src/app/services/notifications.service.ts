import { Injectable } from '@angular/core';
import { Notification } from '../shared/notification';
import { ConnectionService } from './connection.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { TIME_DELAYS } from '../shared/const';

@Injectable()
export class NotificationsService {
  private listSubject: BehaviorSubject<Notification[][]> = new BehaviorSubject(
    []
  );
  private _list: Notification[][] = [];

  constructor(private connectionService: ConnectionService) {
    this.connectionService.connectionStream.subscribe(
      notificationDataMessage => {
        const dataObject = JSON.parse(notificationDataMessage);
        this.add(
          new Notification(dataObject, this.getTimeDelay(dataObject.timestamp))
        );
      }
    );

    setInterval(this.updateGroup.bind(this, 0), 1000);
    setInterval(this.updateGroup.bind(this, 1), 1000);
  }

  add(notification: Notification): void {
    if (this._list[0]) {
      this._list[0].push(notification);
    } else {
      this._list.push([notification]);
    }
    this.updateListSubject();
  }

  public getList(index): Notification[] {
    return this._list[index];
  }

  private updateListSubject(): void {
    this.listSubject.next(this._list);
  }

  get listObservable(): Observable<Notification[][]> {
    return this.listSubject.asObservable();
  }

  removeNotification(notificationToRemove: Notification) {
    const removedNotificationIndex = this._list[
      notificationToRemove.timeGroup
    ].findIndex(
      notification => notification.timestamp === notificationToRemove.timestamp
    );
    this._list[notificationToRemove.timeGroup].splice(
      removedNotificationIndex,
      1
    );
    this.updateListSubject();
  }

  getTimeDelay(timestamp): number {
    const differenceInSecs = Math.round(
      (new Date().getTime() - timestamp) / 1000
    );
    let timeDelay;
    if (differenceInSecs < TIME_DELAYS.recent) {
      timeDelay = Math.round(60 - differenceInSecs);
    } else if (differenceInSecs < TIME_DELAYS.medium) {
      const minutesValue = Math.round(differenceInSecs / 60);

      timeDelay = Math.round(TIME_DELAYS.medium - minutesValue * 60);
    } else {
      timeDelay = -1;
    }
    return timeDelay;
  }

  updateGroup(groupIndex: number): void {
    if (this._list[groupIndex]) {
      this._list[groupIndex].forEach(notification => {
        notification.decreaseTimeDelay();
        if (notification.timeDelay <= 0) {
          notification.increaseTimeGroup();
          this._list[groupIndex].splice(
            this._list[groupIndex].indexOf(notification),
            1
          );
          notification.timeDelay = this.getTimeDelay(notification.timestamp);
          if (this._list[1 + groupIndex]) {
            this._list[1 + groupIndex].push(notification);
          } else {
            this._list[1 + groupIndex] = [notification];
          }
        }
      });
    }
  }
}
