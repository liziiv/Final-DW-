import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CocktailCard from './components/CocktailCard';
import CocktailModal from './components/CocktailModal';
import './styles.css';

function App() {
    const [cocktails, setCocktails] = useState([]);
    const [selectedCocktail, setSelectedCocktail] = useState(null);

    useEffect(() => {
        axios.get('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
            .then(response => setCocktails(response.data.drinks))
            .catch(error => console.error('Error fetching cocktails:', error));
    }, []);

    const handleCardClick = (id) => {
        axios.get(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => setSelectedCocktail(response.data.drinks[0]))
            .catch(error => console.error('Error fetching cocktail details:', error));
    };

    const handleCloseModal = () => {
        setSelectedCocktail(null);
    };

    return (
        <div className="App">
            <h1>REYNA VASQUEZ 1790 21 340</h1>
            <h1>DESARROLLO WEB EXAMEN FINAL</h1>
            <div className="card-container">
                {cocktails.map(cocktail => (
                    <CocktailCard
                        key={cocktail.idDrink}
                        cocktail={cocktail}
                        onClick={() => handleCardClick(cocktail.idDrink)}
                    />
                ))}
            </div>
            {selectedCocktail && (
                <CocktailModal
                    cocktail={selectedCocktail}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}

export default App;
