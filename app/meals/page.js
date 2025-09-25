import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

const Meals = async() =>{
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}
const MealsPage = async () =>{
    return(
        <>
        <header className={classes.header}>
            <h1>Delicious Meals, created <span className={classes.highlight}>by you</span></h1>
            <p>choose your favorite recipes and share it with the world</p>
            <div className={classes.cta}>
                <Link href="/meals/share">Share your favorite recipe</Link>
            </div>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
                <Meals />
            </Suspense>
        </main>
        </>
    );
};

export default MealsPage;