import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio7',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio7.component.html',
  styleUrls: ['./exercicio7.component.css']
})
export class Exercicio7Component {
  valor: number | string = 1;
  tipoValor: string = 'number';
  
  mudarParaNumero() {
    this.valor = 1;
    this.tipoValor = 'number';
  }
  
  mudarParaString() {
    this.valor = 'dois';
    this.tipoValor = 'string';
  }
  
  mudarParaOutro() {
    this.valor = 3;
    this.tipoValor = 'outro';
  }
}
