import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = "Ferry";

  name2 = "ferrAn olivElla tarRago";

  myArray = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  n = 0.234;

  salary = 1234.5;

  heroe = {
    name: 'Logan',
    key: 'Wolverine',
    edad: 500,
    address: {
      street: 'Sesam',
      home: '10'
    }
  }

  promiseVar = new Promise( (resolve, reject) => {
    setTimeout( ()=> resolve('The date has arrived!'), 3500);
  })

  myDate = new Date();

  video = 'RJIZX2vtFs4';

  activate:boolean = true;

}
