import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemons'
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./pages/pokemons-page/pokemons-page.module').then(
        (m) => m.PokemonsPageModule,
      ),
  },
  {path: '**', redirectTo: 'pokemons'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
