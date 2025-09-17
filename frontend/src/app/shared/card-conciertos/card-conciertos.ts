import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Conciertos } from '../../core/models/conciertos.model'
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-card-conciertos',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './card-conciertos.html',
  styleUrl: './card-conciertos.css',
  standalone: true,
})
export class CardConciertos implements OnInit {

    @Input() concierto: Conciertos = {} as Conciertos;

    constructor(private apiService: ApiService, private router: Router) { }

    ngOnInit(): void {
        console.log(this.concierto);
    }

    deleteConcierto(concierto: Conciertos): void {
        console.log('Eliminando concierto:', concierto);
        // console.log(concierto._id);
        // return;
        this.apiService.delete('/api/conciertos', concierto._id).subscribe({
            next: () => {
                console.log('Concierto eliminado exitosamente');
                this.concierto = this.concierto.filter(c => c._id !== concierto._id);
                // this.concierto = {} as Conciertos;
                // const cardElement = document.querySelector(`[data-concierto-id="${concierto._id}"]`);
                // if (cardElement) {
                //     cardElement.remove();
                // }
            },
            error: (err) => console.error('Error al eliminar el concierto:', err)
        });
    }
}