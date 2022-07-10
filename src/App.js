import './App.css';
import video from './food.mp4';
import { useState, useEffect } from 'react';
import ShowRecipe from './ShowRecipe';

function App() {
  const[search, setSearch] = useState('')
  const[recipes, setRecipes] = useState([])
  const[wordSubmitted, setWordSubmitted] = useState('chicken')

  useEffect( ()=> {
    const getRecipe = async()=>{
    const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=d964c757&app_key=370ea51abacd1f53d5868e6a1045325a`)
    const data = await responce.json()
    console.log(data.hits)
    setRecipes(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch =(e)=> {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const finalSearch =(e)=> {
    e.preventDefault();
    setWordSubmitted(search)
  }
  return (
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>recipe search</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' 
          type="text" 
          placeholder='avocado ...' 
          onChange={myRecipeSearch}
          value={search}/>
          <button className='btn-search'>Search</button>
        </form>
      </div>

   
      {recipes.map((element,id)  => (
          <ShowRecipe key={id} label={element.recipe.label}
            cuisineType={element.recipe.cuisineType}
            calories={element.recipe.calories}
            image={element.recipe.image}
            totalTime={element.recipe.totalTime}
            ingredientLines={element.recipe.ingredientLines}
            url={element.recipe.url}
            mealType={element.recipe.mealType}
           />
        ))}
       

    </div>
  );
}

export default App;
