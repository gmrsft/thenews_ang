export class Vehicle {
  public brand: string;
  public model: string;
  public year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo(): void {
    console.log(`Veículo: ${this.brand} ${this.model} (${this.year})`);
  }
}