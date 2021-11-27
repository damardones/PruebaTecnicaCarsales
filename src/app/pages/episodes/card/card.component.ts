import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Episode } from 'src/app/logic/model/episodes/episode.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('episode') episode:Episode = new Episode();
  constructor(private router:Router) { }

  public listImages: string[] = [
    'https://media.cdn.adultswim.com/uploads/20211116/thumbnails/2_2111161113156-RickAndMorty_Extra_SamuraiAndShogunPart2_11W6W0.png',
    'https://media.cdn.adultswim.com/uploads/20211009/thumbnails/2_211091014567-RAM_Extra_GreatYokaiBattle_10N7R5.png',
    'https://media.cdn.adultswim.com/uploads/20210902/thumbnails/2_21921528226-RickMorty_509_XXV81.png',
    'https://media.cdn.adultswim.com/uploads/20210902/thumbnails/2_21921539481-RickMorty_Inside510_Y7MJ8.png',
    'https://media.cdn.adultswim.com/uploads/20210806/thumbnails/2_21861228563-RickMorty_Inside508_WKT6G.png',
    'https://media.cdn.adultswim.com/uploads/20210803/thumbnails/2_2183174417-SummerMeetsGod.png',
    'https://media.cdn.adultswim.com/uploads/20210730/thumbnails/2_21730123298-RickMorty_Inside504_VYX5J.png',
    'https://media.cdn.adultswim.com/uploads/20210723/thumbnails/2_21723124299-RickMorty_Inside507E_VK8HV.png',
    'https://media.cdn.adultswim.com/uploads/20210716/thumbnails/2_217161042572-RickMorty_Inside506_V43V6.png',
    'https://media.cdn.adultswim.com/uploads/20210709/thumbnails/2_21791121193-RickMorty_Inside505_V4465.png',
    'https://media.cdn.adultswim.com/uploads/20210701/thumbnails/2_21711512128-RickMorty_Inside503_TXFKJ.png',
    'https://media.cdn.adultswim.com/uploads/20210628/thumbnails/2_21628714375-RickMorty_Inside502.png',
    'https://media.cdn.adultswim.com/uploads/20210623/thumbnails/2_216231347425-RAMs5e1.png',
    'https://media.cdn.adultswim.com/uploads/20210621/thumbnails/2_21621711535-RickMorty_Inside501.png'
  ]
  public randomImage: string = '';

  getEpisode(){
    return this.episode;
  }
  ngOnInit(): void {
    this.getRandomImage();      
  }

  public getRandomImage(){
    let random = this.listImages[Math.floor(Math.random() * this.listImages.length)];
    this.randomImage = random;
  }

  public showCharacters(path:string){    
      this.router.navigate(['/' + path], {queryParams: {idEpisode: this.episode.id}});    
  }

}
