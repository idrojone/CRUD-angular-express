import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.services'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-conciertos',
  imports: [CommonModule, FormsModule],
  templateUrl: './conciertos.html',
  styleUrls: ['./conciertos.css'], 
  standalone: true
})
export class Conciertos implements OnInit {

    conciertos: any[] = [];

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.apiService.getConciertos().subscribe(
            data => this.conciertos = data,
            error => console.error('Error fetching conciertos', error)
        );
    }
    formVisible = false;
    form: any = { id: null, titulo: '', description: '' };

    mostrarFormulario() {
        this.form = { id: null, titulo: '', description: '' };
        this.formVisible = true;
    }

    editarConcierto(concierto: any) {
        this.form = { ...concierto };
        this.formVisible = true;
    }

    guardarConcierto() {
        if (this.form.id) {
            this.apiService.updateConcierto(this.form.id, this.form).subscribe(() => {
                this.ngOnInit();
                this.formVisible = false;
            });
        } else {
            this.apiService.createConcierto(this.form).subscribe(() => {
                this.ngOnInit();
                this.formVisible = false;
            });
        }
    }

    borrarConcierto(id: string) {
        this.apiService.deleteConcierto(id).subscribe(() => this.ngOnInit());
    }

    cancelar() {
        this.formVisible = false;
    }
}
