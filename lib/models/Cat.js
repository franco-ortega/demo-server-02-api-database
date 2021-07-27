import pool from '../utils/pool';

export default class Cat {
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

    static async insert({ id, catName, breed, furColor, age }) {
        const { rows } = await pool.query(
            `INSERT INTO cats (cat_name, breed, fur_color, age) VALUES ($1, $2, $3, $4) RETURNING *`
            [catName, breed, furColor, age]
        );
        console.log('Inside the insert method')
        return new Cat(rows[0]);
    }
};
