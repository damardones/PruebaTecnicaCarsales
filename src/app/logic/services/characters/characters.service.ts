import { Injectable } from '@angular/core';
import { Character } from '../../model/characters/character.model';
import { RestClientService } from '../api/rest-client-service.service';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private configurationService:ConfigurationService, private restClientService: RestClientService) { }

  public async getCharacterAsync(path: string):Promise<Character>{    
    return await this.restClientService.getAsync(path);
  }

}
