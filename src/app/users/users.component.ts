import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  loading: boolean = false;

  constructor(private usrerService: UserService) { }

  ngOnInit(): void {}

  onLoadUsers(): void {
    this.loading = true;
    this.usrerService.getUser()
      .then((result) => this.users = result)
      .catch((error) => console.log(error))
      .finally(() => this.loading = false)
  }
}
