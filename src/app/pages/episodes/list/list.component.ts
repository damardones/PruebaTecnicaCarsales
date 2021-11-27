import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/logic/model/episodes/episode.model';
import { Info } from 'src/app/logic/model/episodes/info.model';
import { EpisodesService } from 'src/app/logic/services/episodes/episodes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public columns = 5;
  public dataSource: Episode[] = [];
  public info:Info = new Info();
  public actualPage:number = 1;
  constructor(private episodesService:EpisodesService) { }

  ngOnInit(): void {
    this.getEpisodesAsync(); 
    this.columns = Math.round(window.innerWidth / 400);
  }

  public async getEpisodesAsync(){
    let result = await this.episodesService.getEpisodesAsync();
    this.dataSource = result.results; 
    this.info = result.info;          
  } 

  public onResize(event:any){
    this.columns = Math.round(window.innerWidth / 400);
  }

  public async nextPage(){
    if (this.info.next != null) {
      this.reloadData(this.info.next);  
      this.actualPage++;
    }         
  }

  public async previusPage(){
    if (this.info.prev != null) {
      this.reloadData(this.info.prev);  
      this.actualPage--;
    }     
  }

  private async reloadData(direction:string){
    let result = await this.episodesService.getOtherEpisodesAsync(direction);
    this.dataSource = result.results; 
    this.info = result.info;
  }

}
