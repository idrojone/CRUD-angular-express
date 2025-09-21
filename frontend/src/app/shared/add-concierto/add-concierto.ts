import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Conciertos } from '../../core/models/conciertos.model';
import { ApiService } from '../../core/services/api.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-add-concierto',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './add-concierto.html',
    styleUrl: './add-concierto.css'
})


export class AddConcierto implements OnInit {

    concierto: Conciertos = {
        _id: '',
        name: '',
        description: '',
        price: 0,
        place: '',
        slug: ''
    };

    isEdit = false;

    formConcierto = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(1)]),
        description: new FormControl('', [Validators.required, Validators.minLength(1)]),
        price: new FormControl(0, [Validators.required, Validators.min(0)]),
        place: new FormControl('', [Validators.required, Validators.minLength(1)])
    });

    apiService = inject(ApiService);
    route = inject(ActivatedRoute)
    router = inject(Router)

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            console.log(params);
            const slug = params.get('slug');
            if (slug) {
                this.isEdit = true;
                this.apiService.get(`/api/conciertos/${slug}`).subscribe({
                    next: (data) => {
                        this.concierto = data;
                        this.formConcierto.patchValue({
                            name: this.concierto.name,
                            description: this.concierto.description,
                            price: this.concierto.price,
                            place: this.concierto.place
                        })
                    },
                    error: (e) => console.error(e)
                });
            }
        });
    }

    saveConcierto(): void {
        const conciertoData = this.formConcierto.value;

        if (this.isEdit) {
            this.apiService.put(`/api/conciertos/${this.concierto.slug}`, conciertoData).subscribe({
                next: (res) => {
                    Swal.fire({
                        title: 'Concierto actualizado',
                        text: 'El concierto se ha actualizado correctamente.',
                        icon: 'success'
                    });
                    this.router.navigate(['/conciertos']);
                },
                error: (e) => console.error(e)
            });
        } else {
            this.apiService.post('/api/conciertos', conciertoData).subscribe({
                next: (res) => {
                    Swal.fire({
                        title: 'Concierto creado',
                        text: 'El concierto se ha creado correctamente.',
                        icon: 'success'
                    });
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
            place: '',
            slug: ''
        };
    }

    onSubmit() {
        if (this.formConcierto.valid) {
            this.saveConcierto();
        } else {
            Swal.fire({
                title: 'Formulario incompleto',
                text: 'Por favor, rellena todos los campos obligatorios.',
                icon: 'warning'
            });
        }
    }
}