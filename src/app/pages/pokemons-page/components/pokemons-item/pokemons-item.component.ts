import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {PokemonsService} from '../../services/pokemons/pokemons.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pokemons-item',
  templateUrl: './pokemons-item.component.html',
  styleUrls: ['./pokemons-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsItemComponent {
  @Input() title?: string;
  @Input() imageUrl?: string;

  imageToShow$: Observable<string> | null = null;

  constructor(private _pokemonsService: PokemonsService) {
  }

  createImageUrl(isExpanded: boolean) {
    if (this.imageUrl && isExpanded && !this.imageToShow$) {
      this.imageToShow$ = this._pokemonsService.getPokemonImage(this.imageUrl);
    }
  }
}
