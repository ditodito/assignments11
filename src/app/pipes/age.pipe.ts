import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birthDate: Date): number {
    const currentDate: Date = new Date();
    let year: number = 0;

    if (currentDate.getMonth() < birthDate.getMonth()) {
      year = 1;
    } else if (currentDate.getMonth() === birthDate.getMonth()) {
      if (currentDate.getDate() < birthDate.getDate()) {
        year = 1;
      }
    }

    return currentDate.getFullYear() - birthDate.getFullYear() - year;
  }

}
