import { Component } from '@angular/core';
import { Conciertos } from '../../components/list-conciertos/list-conciertos';

@Component({
  selector: 'app-conciertos-page',
  imports: [Conciertos],
  templateUrl: './conciertos-page.html',
  styleUrl: './conciertos-page.css',
  standalone: true
})
export class ConciertosPage { }
