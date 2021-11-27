import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/logic/model/characters/character.model';
import { CharactersService } from 'src/app/logic/services/characters/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private characterService:CharactersService) { }
  public episodeNumber: number = 1;
  public dataSource: Character =  new Character();

  ngOnInit(): void {
  }

  public async getCharacter(){
    let path = '/' + this.episodeNumber;
    this.dataSource = await this.characterService.getCharacterAsync(path);   
    console.log(this.dataSource);
    
  }

}
