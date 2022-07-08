
const ShowRecipe = ({label, cuisineType, calories, image, ingredientLines, totalTime, url, mealType}) => {
    return (
        <div className='card'>
            <div><h3>{label}</h3></div>

        <div className='card-recipe'>
            <div>
            <p>Cuisine: {cuisineType}</p>
            <img  src={image} alt='recipe'/>
            <p>{calories.toFixed()} calories</p>
            <p>Total time: {totalTime} mins</p>
            <p>Meal type: {mealType}</p>
            </div>

            <div className='ing'>
            <ul>Ingredients:
                {ingredientLines.map((item, i)=> (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <a href={url}> 
                <button className='btn-link'> RECIPE</button>
             </a>
            </div>
        </div>

        </div>
    );
}

export default ShowRecipe;
