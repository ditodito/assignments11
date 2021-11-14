import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User';

@Pipe({
  name: 'mapNames'
})
export class MapNamesPipe implements PipeTransform {

  transform(users: User[]): string {
    return users.map((item) => item.firstName).join(', ');
  }

}
