"use server";

import { addMeal } from './meals';
import { redirect } from 'next/navigation';

export async function shareMeal(formData) {
    const meal = {
        title: formData.get('title'),
        image: formData.get('image'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator: formData.get('creator'),
        creator_email: formData.get('creator_email')
    }
    console.log(meal);  
    await addMeal(meal);
    redirect(`/meals/${meal.slug}`);
}