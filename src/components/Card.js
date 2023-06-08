import React from 'react';

const Card = ({meal}) => {

    return (
        <div className='meal-card'>
            <h2>{meal.strMeal}</h2>
            <p>Origin : {meal.strArea}</p>
            <img src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
                <h3>Ingredients :</h3>
                <ul>
                    {/* //? je map sur les 20 ingredients et je retourne un li avec le nom de l'ingredient*/}
                    {Object.keys(meal)
                    .filter((key) => key.includes('Ingredient') && meal[key])
                    .map((ingredient, index) => (
                        <li key={index}>
                            {meal[ingredient]}
                        </li>
                    ))}
                </ul>

                <button onClick={() =>  window.open(meal.strYoutube, "_blank")}> Watch the video</button>
    
        </div>
    );
};

export default Card;