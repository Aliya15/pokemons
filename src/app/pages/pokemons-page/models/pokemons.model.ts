export interface Pokemons {
  count: number;
  next: number;
  previous: string;
  results: PokemonsItem[]
}

export interface PokemonsItem {
  name: string;
  url: string;
}

export interface PokemonImage {
  sprites: {
    front_default: string
  }
}
