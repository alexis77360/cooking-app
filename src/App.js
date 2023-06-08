import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

const App = () => {

  const [mealsData, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState('');


  //? création d'un hook d'effet pour récupérer les données de l'API au chargement de la page de que inoputSearch change je relance le hook 
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputSearch)
      .then((res) => setMealsData(res.data.meals));
  }, [inputSearch]);
  

  return (
    <div className="app-container">
      <h1>Cooking Receipe</h1>
      <input 
      type="text" 
      autoFocus
      placeholder="What do you want to eat today?"
      onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="meals-container">
        {/*//? slice limite le resultat a 24 si mealsdata existe alors je map sur le tableau et je retourne un composant card avec les props meal */}
        {mealsData  && mealsData 
          .slice(0, 24)
          .map((meal) => 

        <Card key={meal.idMeal} meal={meal} />

        )}

        {/*//? si mealsdata n'existe pas alors je retourne un message d'erreur */}
        {!mealsData && <p> No result found 🫤</p>}
      
      </div>


    </div>
  );
}

export default App;
