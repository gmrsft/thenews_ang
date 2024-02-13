import { Component } from '@angular/core';
import { Car } from '../../classes/car.model';
import { Motorcycle } from '../../classes/motorcycle.model';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.css']
})
export class PooComponent {
  car: Car;
  motorcycle: Motorcycle;

  constructor() {
    this.car = new Car('Toyota', 'Corolla', 2022, 4);
    this.motorcycle = new Motorcycle('Honda', 'CBR600RR', 2021, 600);
  }
}
