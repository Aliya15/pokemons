import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsPageComponent {
}
