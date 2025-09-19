import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Footer } from "../shared/layout/footer/footer";
import { Header } from "../shared/layout/header/header";

@Component({
  selector: 'app-main',
  imports: [
    RouterModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    Footer,
    Header
],
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
  standalone: true
})
export class Main { }