import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activated: boolean = true): string {

    if (activated) {
      let output:string = "";

      for (let i = 0; i < value.length; i++) {
        output += "*";
      }

      return output;

    } else {

      return value;

    }

  }

}
