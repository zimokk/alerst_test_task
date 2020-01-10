import { Component, Input, OnChanges } from '@angular/core';
import { TIME_VALUES } from '../../../shared/const';

@Component({
  selector: 'app-notification-temistamp',
  template: '{{ createdText }}',
})
export class NotificationTemistampComponent implements OnChanges {
  @Input() groupIndex: number;
  @Input() delayValue: number;
  @Input() timestamp: number;
  createdText: string;

  ngOnChanges() {
    this.createdText =
      this.groupIndex === 0
        ? TIME_VALUES.recent
        : this.groupIndex === 1
        ? Math.round((300 - this.delayValue) / 60) + TIME_VALUES.minutes
        : new Date(this.timestamp).toLocaleDateString('en-US');
  }
}
