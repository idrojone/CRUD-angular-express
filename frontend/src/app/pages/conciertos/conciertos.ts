import { Component } from '@angular/core';
import { ListConciertos } from '../../shared/list-conciertos/list-conciertos';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-conciertos',
  imports: [ 
    ListConciertos,
    HttpClientModule
  ],
  templateUrl: './conciertos.html',
  styleUrl: './conciertos.css'
})
export class Conciertos {

}
