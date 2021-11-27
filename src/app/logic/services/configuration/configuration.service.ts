import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public loading:boolean;
    
  constructor() { 
      this.loading = false;
  }

  get UrlEpisodes():string {return 'https://rickandmortyapi.com/api/episode'}
  get UrlCharacters():string {return 'https://rickandmortyapi.com/api/character'}
  get UrlLocations():string {return 'https://rickandmortyapi.com/api/location'}

}
