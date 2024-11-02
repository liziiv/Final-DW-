import React from 'react';
import './cardStyles.css'; // Asegúrate de importar el archivo de estilos de la tarjeta

function CocktailCard({ cocktail, onClick }) {
    return (
        <div className="cocktail-card">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h2>{cocktail.strDrink}</h2>
            <button className="info-button" onClick={onClick}>Ver más</button>
        </div>
    );
}

export default CocktailCard;
