import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeComponent } from './episode/episode.component';
import { RouterModule } from '@angular/router';
import { EpisodesRoutes } from './episodes.routing';
import { EpisodesService } from 'src/app/logic/services/episodes/episodes.service';
import { MaterialModule } from 'src/app/logic/Modules/material/material.module';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component'
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [EpisodeComponent, ListComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EpisodesRoutes),
    MaterialModule,
    SharedModule
  ],
  exports: [
    EpisodeComponent
  ],
  providers: [
    EpisodesService
  ]
})
export class EpisodesModule { }
