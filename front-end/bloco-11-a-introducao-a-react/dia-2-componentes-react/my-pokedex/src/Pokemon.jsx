import React from 'react';

class Pokemon extends React.Component {

render() {
    const { pokemons } = this.props;
    return (
        pokemons.map((pokemon) => {
          return (
            <div key={pokemon.id} className='pokemon'>
              <h4>{ pokemon.name }</h4>
              <p>{ pokemon.type }</p>
              <p>Average Weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
              <img className='img-pokemon' src={ pokemon.image } alt={ pokemon.moreInfo } />
            </div>
          );
        })
      );
}

};

export default Pokemon;