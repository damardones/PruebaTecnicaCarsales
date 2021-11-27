import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public date:any;
  constructor() { }

  ngOnInit(): void {
    this.getDate();
  }

  private getDate(){
    let date: Date = new Date();
    this.date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  }
}
