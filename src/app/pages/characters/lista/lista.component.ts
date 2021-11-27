import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/logic/model/characters/character.model';
import { CharactersService } from 'src/app/logic/services/characters/characters.service';
import { EpisodesService } from 'src/app/logic/services/episodes/episodes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private characterService:CharactersService, private episodesService: EpisodesService) { }
  public episodeNumber: number = 1;
  public dataSource: Character[] =  [];  
  public columns = 5;
    
  ngOnInit(): void {
    this.getCharactersByEpisodeAsync();
    this.columns = Math.round(window.innerWidth / 400);
  }

  public onResize(event:any){
    this.columns = Math.round(window.innerWidth / 400);
  }

  public async getCharactersByEpisodeAsync(){
    let response = await this.episodesService.getEpisodeAsync(this.episodeNumber);
    let urlsCharacters = response.characters;

    if (urlsCharacters.length > 0) {
      urlsCharacters.forEach(async (item) => {
        let character = await this.characterService.getCharacterAsync(item);
        this.dataSource.push(character);
      });
    }    
  } 

}
