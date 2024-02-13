// car.model.ts
import { Vehicle } from './vehicle.model';

export class Car extends Vehicle {
    public doors: number;

    constructor(brand: string, model: string, year: number, doors: number) {
        super(brand, model, year);
        this.doors = doors;
    }
}