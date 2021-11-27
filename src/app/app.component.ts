import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ConfigurationService } from './logic/services/configuration/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'rick-and-mortis';
  
  get Loading():boolean{
    return this.configurationService.loading;
  }

  constructor(private configurationService: ConfigurationService, private detectorChanges: ChangeDetectorRef) {      
  }

  ngOnInit(): void {  
    this.configurationService.loading = true;  
  }

  ngAfterContentChecked(): void {
    this.detectorChanges.detectChanges();    
  }

}
