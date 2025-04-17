import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Exercicio1Component } from './exercicios/exercicio1/exercicio1.component';
import { Exercicio2Component } from './exercicios/exercicio2/exercicio2.component';
import { Exercicio3Component } from './exercicios/exercicio3/exercicio3.component';
import { Exercicio4Component } from './exercicios/exercicio4/exercicio4.component';
import { Exercicio5Component } from './exercicios/exercicio5/exercicio5.component';
import { Exercicio6Component } from './exercicios/exercicio6/exercicio6.component';
import { Exercicio7Component } from './exercicios/exercicio7/exercicio7.component';
import { Exercicio8Component } from './exercicios/exercicio8/exercicio8.component';
import { Exercicio9Component } from './exercicios/exercicio9/exercicio9.component';
import { Exercicio10Component } from './exercicios/exercicio10/exercicio10.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    Exercicio6Component,
    Exercicio7Component,
    Exercicio8Component,
    Exercicio9Component,
    Exercicio10Component
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Checkpoint 2 - Angular';
}
