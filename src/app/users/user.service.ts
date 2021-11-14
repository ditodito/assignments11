import { Injectable } from '@angular/core';
import { Status, User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser(): Promise<User[]> {
    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        const users = [
          {
            firstName: 'Lionel',
            lastName: 'Messi',
            birthDate: new Date('1987-05-24'),
            status: Status.Active,
            about: 'About Lionel Messi',
          },
          {
            firstName: 'Diego',
            lastName: 'Maradona',
            birthDate: new Date('1960-10-30'),
            status: Status.Deleted,
            about: 'About Diego Maradona',
          },
          {
            firstName: 'Gabriel',
            lastName: 'Batistuta',
            birthDate: new Date('1969-01-01'),
            status: Status.Inactive,
            about: 'About Gabriel Batistuta',
          },
        ];
        resolve(users);
      }, 2000);
    });
  }
}
