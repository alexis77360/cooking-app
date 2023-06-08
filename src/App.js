import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Card from './components/Card';



const App = () => {

  const [mealsData, setMealsData] = useState([])


  //? création d'un hook d'effet pour récupérer les données de l'API au chargement de la page
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .then((res) => setMealsData(res.data.meals));
  }, []);
  





  return (
    <div className="app-container">
      <h1>React Cooking app</h1>
      <input type="text" placeholder="Taper le nom de l'aliment en anglais" />
      <div className="meals-container">
      {mealsData.map((meal) => 

        <Card key={meal.idMeal} meal={meal} />

        )}

        

      </div>


    </div>
  );
}

export default App;
