import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { Conciertos } from './components/list-conciertos/list-conciertos';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    App,
    Conciertos
  ],
  bootstrap: [App]
})
export class AppModule { }