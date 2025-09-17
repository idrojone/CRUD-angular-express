import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Conciertos } from '../../core/models/conciertos.model';
import { ApiService } from '../../core/services/api.service';

@Component({
    selector: 'app-add-concierto',
    imports: [FormsModule], 
    templateUrl: './add-concierto.html',
    styleUrl: './add-concierto.css'
})


export class AddConcierto implements OnInit {

    concierto: Conciertos = {
        _id: '',
        name: '',
        description: '',
        price: 0,
        place: ''
    };

    isEdit = false;

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.isEdit = true;
                this.apiService.get(`/api/conciertos/${id}`).subscribe({
                    next: (data) => {
                        this.concierto = data;
                    },
                    error: (e) => console.error(e)
                });
            }
        });
    }

    saveConcierto(): void {
        if (this.isEdit) {
            this.apiService.put(`/api/conciertos/${this.concierto._id}`, this.concierto).subscribe({
                next: (res) => {
                    console.log('Concierto actualizado:', res);
                    this.router.navigate(['/conciertos']);
                },
                error: (e) => console.error(e)
            });
        } else {
            this.apiService.post('/api/conciertos', this.concierto).subscribe({
                next: (res) => {
                    console.log('Concierto creado:', res);
                    this.router.navigate(['/conciertos']);
                },
                error: (e) => console.error(e)
            });
        }
    }

    newConcierto(): void {
        this.concierto = {
            _id: '',
            name: '',
            description: '',
            price: 0,
            place: ''
        };
    }
}