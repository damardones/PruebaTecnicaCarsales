import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationHttpService {

  constructor() { }

  public httpHeader(){
    const HTTPHEADERS = new HttpHeaders({
      'Content-type': 'application/json'
    });

    return HTTPHEADERS;
  }
}
