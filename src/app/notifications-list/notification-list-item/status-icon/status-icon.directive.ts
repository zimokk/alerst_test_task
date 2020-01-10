import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appStatusIcon]',
})
export class StatusIconDirective implements OnChanges {
  @Input() groupNumber: number;

  constructor(private el: ElementRef) {
    this.el = el;
  }

  ngOnChanges() {
    switch (this.groupNumber) {
      case 0: {
        this.el.nativeElement.style.backgroundColor = 'rgb(0,44,255)';
        break;
      }
      case 1: {
        this.el.nativeElement.style.backgroundColor = 'rgba(0,174,20,0.93)';
        break;
      }
      case 2: {
        this.el.nativeElement.style.backgroundColor = 'rgb(255,206,0)';
        break;
      }
      case 3: {
        this.el.nativeElement.style.backgroundColor = 'rgba(255,0,35,0.83)';
        break;
      }
      default:
        break;
    }
  }
}
