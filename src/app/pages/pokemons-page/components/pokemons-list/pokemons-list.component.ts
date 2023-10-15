import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PokemonsService} from '../../services/pokemons/pokemons.service';
import {PokemonsItem} from '../../models/pokemons.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsListComponent {
  readonly pokemonsList: Observable<PokemonsItem[]> = this._pokemonsService.getPokemonsList();

  constructor(private _pokemonsService: PokemonsService) {
  }
}
