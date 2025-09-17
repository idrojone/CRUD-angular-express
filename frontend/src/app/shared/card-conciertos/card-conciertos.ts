import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    @Output() conciertoEliminado = new EventEmitter<string>();

    constructor(
        private apiService: ApiService
    ) { }

    ngOnInit(): void {
        console.log(this.concierto);
    }

    deleteConcierto(): void {
        console.log('Eliminando concierto:', this.concierto);

        this.apiService.delete('/api/conciertos', this.concierto._id).subscribe({
            next: () => {
                console.log('Concierto eliminado exitosamente');
                this.conciertoEliminado.emit(this.concierto._id);
            },
            error: (err) => console.error('Error al eliminar el concierto:', err)
        });
    }
}