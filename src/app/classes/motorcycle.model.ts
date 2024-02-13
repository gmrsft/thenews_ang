import { Vehicle } from './vehicle.model';

export class Motorcycle extends Vehicle {
    public cc: number;

    constructor(brand: string, model: string, year: number, cc: number) {
        super(brand, model, year);
        this.cc = cc;
    }

    // Adicione o modificador override
    override displayInfo(): void {
        super.displayInfo();
        console.log(`Cilindradas: ${this.cc}`);
    }
}