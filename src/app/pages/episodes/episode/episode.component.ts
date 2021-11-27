import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/logic/services/configuration/configuration.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  constructor(private configurationService:ConfigurationService) {    
  }

  ngOnInit(): void {        
    this.configurationService.loading = false;   
  }


}
