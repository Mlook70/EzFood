import sql from 'better-sqlite3';
import xss from 'xss';
import slugify from 'slugify';
import fs from 'fs';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function addMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true});
    meal.instructions = xss(meal.instructions);

    const extintion = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extintion}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Failed to save image');
        }
        meal.image = `/images/${fileName}`;
        db.prepare('INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)').run(meal);
    });
}