import { TestBed, inject } from '@angular/core/testing';

import { NotificationsService } from './notifications.service';
import {ConnectionService} from "./connection.service";

describe('NotificationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService, ConnectionService],
    });
  });

  it('should be created', inject(
    [NotificationsService],
    (service: NotificationsService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should return right time delay value', inject(
    [NotificationsService],
    (service: NotificationsService) => {
      expect(service).toBeTruthy();

      console.log(service.getTimeDelay(new Date().getTime()));
      expect(service.getTimeDelay(new Date().getTime() - 310000)).toEqual(-1);
      expect(service.getTimeDelay(new Date().getTime())).toEqual(60);
      expect(service.getTimeDelay(new Date().getTime() - 120000)).toEqual(180);
    }
  ));
});
