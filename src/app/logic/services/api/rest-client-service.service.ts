import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationHttpService } from './configuration-http.service';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http: HttpClient, private configurationHttp: ConfigurationHttpService) { }

  public async getAsync<T>(url: string, parameters?: HttpParams): Promise<T>{
    return await this.http.get<T>(url, {headers: this.configurationHttp.httpHeader(), params: parameters}).toPromise();
  }
}
