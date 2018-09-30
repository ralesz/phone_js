'use strict';
(function () {

    function Phone(brand, price, color, memory) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.memory = memory;
    }
    Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and memory is " + this.memory + "GB" + ".");
    }

    function Premier(brand, year, country) {
        this.brand = brand;    
        this.year = year;
        this.country = country;
    }
    Premier.prototype.release = function() {
        alert("The phone brand is " + this.brand + ", year release: " + this.year + " country: " + this.country + ".");
    }

    var iPhone6 = new Premier("Apple", 2014, "USA");
    var iPhone6S = new Phone("Apple", 2250, "silver", 4);
    var LGV30 = new Phone("LG", 2000, "white", 3);
    var SamsungGalaxyS6 = new Phone("Samsung", 1500, "blue", 2);

    iPhone6.release();
    
    iPhone6S.printInfo();
    LGV30.printInfo();
    SamsungGalaxyS6.printInfo();

})();