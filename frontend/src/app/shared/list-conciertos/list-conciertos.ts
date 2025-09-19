import { Component, inject } from '@angular/core';
import { Footer } from '../layout/footer/footer';
import { OnInit } from '@angular/core';
import { ApiService } from '../../core/services/index';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardConciertos } from '../card-conciertos/card-conciertos';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-list-conciertos',
    imports: [
    HttpClientModule,
    CommonModule,
    CardConciertos,
    RouterLink
],
    templateUrl: './list-conciertos.html',
    styleUrl: './list-conciertos.css',
    standalone: true
})
export class ListConciertos implements OnInit {

    conciertos: any[] = [];

    ApiService = inject(ApiService);

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

    onConciertoEliminado(slug: string): void {
        this.ApiService.delete('/api/conciertos', slug).subscribe({
            next: () => {
                this.conciertos = this.conciertos.filter(c => c.slug !== slug);
            },
            error: (error) => {
                console.error('Error deleting concierto:', error);
            }
        });
    }
}
