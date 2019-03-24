import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})

export class CapitalizedPipe implements PipeTransform {

  // we have modified the type of value to string, and the type of returned too.
  // args are at the old way. We added 3 ". . . " before the "args" for get all the args we could receive.
  // transform(value: string, ...args: any[]): string { console.log(value); console.log(args);
  transform(value: string, allUpper: boolean = true): string {
    value = value.toLowerCase();
    let names = value.split(" ");

    if (allUpper) {

      for (let i in names) {

        names[i] = names[i][0].toUpperCase() + names[i].substr(1);

      }

    } else {

      names[0] = names[0][0].toUpperCase() + names[0].substr(1);

    }

    return names.join(" ");
  }

}
