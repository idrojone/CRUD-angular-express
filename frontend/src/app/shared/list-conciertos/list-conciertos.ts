import { Component } from '@angular/core';
import { Footer } from '../layout/footer/footer';
import { OnInit } from '@angular/core';
import { ApiService } from '../../core/services/index';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardConciertos } from '../card-conciertos/card-conciertos';

@Component({
    selector: 'app-list-conciertos',
    imports: [
        Footer,
        HttpClientModule,
        CommonModule,
        CardConciertos
    ],
    templateUrl: './list-conciertos.html',
    styleUrl: './list-conciertos.css',
    standalone: true
})
export class ListConciertos implements OnInit {

    conciertos: any[] = [];

    constructor(
        private ApiService: ApiService
    ) { }

    ngOnInit(): void {
        this.getConciertos();
    }

    getConciertos(): void {
        this.ApiService.get('/api/conciertos', {}).subscribe(
            (data) => {
                console.log(data);
                this.conciertos = data;
            },
            (error) => {
                console.error('Error fetching conciertos:', error);
            }
        );
    }

    onConciertoEliminado(id: string): void {
        this.ApiService.delete(`/api/conciertos/${id}`, {}).subscribe(
            () => {
                // this.removeConciertoFromList(id);
            },
            (error) => {
                console.error('Error deleting concierto:', error);
            }
        );
        this.conciertos = this.conciertos.filter(c => c._id !== id);
    }
}
