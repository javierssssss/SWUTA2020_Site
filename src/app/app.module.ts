import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompNvgEstudianteComponent } from './CMenus/comp-nvg-estudiante/comp-nvg-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    CompNvgEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
