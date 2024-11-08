{
    // 
    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number){
            this.make = make;
            this.model = model;
            this.year = year
        };

        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }

    };


    // usage examle
    const car = new Car("Toyota", "Civic", 2020);
    console.log(car.getCarAge());
}