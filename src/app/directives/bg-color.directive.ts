import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Status } from '../models/User';

@Directive({
  selector: '[appBgColor]',
})
export class BgColorDirective implements OnInit {
  //@Input() status?: Status;

  @Input()
  set status(status: Status) {
    switch (status) {
      case Status.Deleted:
        this._status = 'bg-danger';
        break;
      case Status.Active:
        this._status = 'bg-success';
        break;
      case Status.Inactive:
        this._status = 'bg-primary';
        break;
    }
  }

  _status: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.classList.add(this._status);
  }
}
