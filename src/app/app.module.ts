import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EpisodesModule } from './pages/episodes/episodes.module';
import { SharedModule } from './pages/shared/shared.module';
import { AppRoutingModule } from './app-routing-module';
import { RouterModule } from '@angular/router';
import { RestClientService } from './logic/services/api/rest-client-service.service';
import { ConfigurationHttpService } from './logic/services/api/configuration-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    EpisodesModule
  ],
  providers: [
    RestClientService,
    ConfigurationHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
