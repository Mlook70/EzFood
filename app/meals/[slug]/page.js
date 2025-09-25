import classes from './page.module.css';
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import NotFound from '@/app/not-found';

const MealsSlug = ({params}) =>{
    const meal = getMeal(params.slug);

    console.log(meal);
    if (!meal) {
        return NotFound();
    }

    console.log(meal.instructions);
    meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

    return(
        <>
        <header className={classes.header}>
            <div className={classes.image}>
              <Image fill src={meal.image} alt={meal.title} />
            </div>
            <div className={classes.headerText}>
              <h1>{meal.title}</h1>
              <p>by <a className={classes.creator} href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
              <p className={classes.summary}>{meal.summary}</p>
            </div>
        </header>

        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{
                __html: meal.instructions
            }}></p>
        </main>
        </>
    );
};

export default MealsSlug;