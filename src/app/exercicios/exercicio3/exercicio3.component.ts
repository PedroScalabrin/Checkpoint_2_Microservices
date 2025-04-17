import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component {
  idade: number = 17;
  
  aumentarIdade() {
    this.idade++;
  }
  
  diminuirIdade() {
    this.idade--;
  }
}
