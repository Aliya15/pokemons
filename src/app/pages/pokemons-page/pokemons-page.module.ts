import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AccordionModule} from '../../shared/components/accordion/accordion.module';
import {PokemonsPageRoutingModule} from './pokemons-page-routing.module';
import {PokemonsListComponent} from './components/pokemons-list/pokemons-list.component';
import {PokemonsItemComponent} from './components/pokemons-item/pokemons-item.component';
import {PokemonsPageComponent} from './pokemons-page.component';
import {HeaderModule} from '../../core/header/header.module';
import {MenuModule} from '../../core/menu/menu.module';
import {FooterModule} from '../../core/footer/footer.module';
import {PokemonsService} from './services/pokemons/pokemons.service';

@NgModule({
  declarations: [
    PokemonsPageComponent,
    PokemonsListComponent,
    PokemonsItemComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    PokemonsPageRoutingModule,
    AccordionModule,
    HeaderModule,
    MenuModule,
    FooterModule,
  ],
  providers: [PokemonsService],
  exports: [PokemonsPageComponent],
})
export class PokemonsPageModule {
}
