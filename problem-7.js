{
    // 
    var Car = /** @class */ (function () {
        function Car(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        ;
        Car.prototype.getCarAge = function () {
            var currentYear = new Date().getFullYear();
            return currentYear - this.year;
        };
        return Car;
    }());
    ;
    // usage examle
    var car = new Car("Toyota", "Civic", 2020);
    console.log(car.getCarAge());
}
