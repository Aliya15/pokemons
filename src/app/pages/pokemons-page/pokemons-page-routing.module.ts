import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonsPageComponent} from './pokemons-page.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsPageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsPageRoutingModule {
}
