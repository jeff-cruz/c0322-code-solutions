import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  return <li>{props.value}</li>;
}

function PokemonList(props) {
  const pokedex = props.pokedex;
  const listItems = pokedex.map(pokemon =>
    <ListItem key={pokemon.number.toString()} value={pokemon.name} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

/**
 * const element = (
 * <ul>
 *  {
 *    pokedex.map(pokemon => {
 *     return <li> key={pokemon.number}>{pokemon.name}</li>;
 *    })
 *  }
 * </ul>
 * );
 */

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<PokemonList pokedex={pokedex} />);
