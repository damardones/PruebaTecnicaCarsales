import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/logic/model/characters/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input('character') character:Character = new Character();
  constructor() { }

  ngOnInit(): void {    
  }

}
