import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {PokemonImage, Pokemons, PokemonsItem} from '../../models/pokemons.model';

@Injectable()
export class PokemonsService {

  constructor(private http: HttpClient) {
  }

  getPokemonsList(): Observable<PokemonsItem[]> {
    return this.http.get<Pokemons>(`https://pokeapi.co/api/v2/pokemon`, {params: {limit: 25}})
      .pipe(
        map((data: Pokemons) => data.results),
      );
  }

  getPokemonImage(imageUrl: string): Observable<string> {
    return this.http.get<PokemonImage>(imageUrl).pipe(map((data: PokemonImage) => data.sprites.front_default))
  }
}
