import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.sass']
})
export class UserItemComponent implements OnInit {

  @Input() user?: User;

  constructor() { }

  ngOnInit(): void {
  }

}
