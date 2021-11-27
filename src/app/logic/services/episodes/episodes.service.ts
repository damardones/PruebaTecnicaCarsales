import { Injectable } from '@angular/core';
import { Episode } from '../../model/episodes/episode.model';
import { Response } from '../../model/episodes/response.model';
import { RestClientService } from '../api/rest-client-service.service';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService { 

  constructor(private configurationService:ConfigurationService, private restClientService: RestClientService) { }

  public async getEpisodesAsync():Promise<Response>{
    const URL = this.configurationService.UrlEpisodes;
    return await this.restClientService.getAsync(URL);
  }

  public async getOtherEpisodesAsync(path:string):Promise<Response> {
    return await this.restClientService.getAsync(path);
  }

  public async getEpisodeAsync(idEpisode:number):Promise<Episode>{
    const URL = this.configurationService.UrlEpisodes;
    return await this.restClientService.getAsync(URL + '/' + idEpisode);
  }

}

