import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    RouterModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
  ],
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
  standalone: true
})
export class Main { }