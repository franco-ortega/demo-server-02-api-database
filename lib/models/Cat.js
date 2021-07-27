module.exports = class Cat {
    id;
    catName;
    breed;
    furColor;
    age;

    constructor(row) {
        this.id= row.id;
        this.catName= row.cat_name;
        this.breed= row.breed;
        this.furColor= row.fur_color;
        this.id= row.age;
    }

};
