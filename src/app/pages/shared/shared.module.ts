import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MarcoComponent } from './marco/marco.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/logic/Modules/material/material.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, MarcoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule, 
  ], 
  exports:[
    MarcoComponent,
  ]
})
export class SharedModule { }
