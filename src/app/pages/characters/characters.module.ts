import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { RouterModule } from '@angular/router';
import { CharacterRoutes } from './characters.routing';
import { MaterialModule } from 'src/app/logic/Modules/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ListaComponent } from './lista/lista.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [CharacterComponent, ListaComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CharacterRoutes),
    MaterialModule,
    SharedModule
  ]
})
export class CharactersModule { }
