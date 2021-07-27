import pool from '../utils/pool.js';

export default class Cat {
    id;
    catName;
    breed;
    furColor;
    age;

    constructor(row) {
        this.id = Number(row.id);
        this.catName = row.cat_name;
        this.breed = row.breed;
        this.furColor = row.fur_color;
        this.age = Number(row.age);
    }

    static async insert({ catName, breed, furColor, age }) {
        const { rows } = await pool.query(`
            INSERT INTO cats (cat_name, breed, fur_color, age)
            VALUES ($1, $2, $3, $4)
            RETURNING *
            `, [catName, breed, furColor, age]
        );
        return new Cat(rows[0]);
    }
};
