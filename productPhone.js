class Product {
    img;
    name;
    priceOrigin;
    price;
    discount;

    constructor(img, name, priceOrigin, price, discount) {
        this.img = img;
        this.name = name;
        this.priceOrigin = priceOrigin;
        this.price = price;
        this.discount = discount;
    }
    get img() {
        return this.img;
    }
    set img(value) {
        this.img = value;
    }
    get name() {
        return this.name;
    }
    set name(value) {
        this.name = value;
    }
    get priceOrigin() {
        return this.priceOrigin;
    }
    set priceOrigin(value) {
        this.priceOrigin = value;
    }
    get price() {
        return this.price;
    }
    set price(value) {
        this.price = value;
    }
    get discount() {
        return this.discount;
    }
    set discount(value) {
        this.discount = value;
    }
}
