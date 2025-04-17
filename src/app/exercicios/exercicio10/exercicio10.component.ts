import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio10',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio10.component.html',
  styleUrls: ['./exercicio10.component.css']
})
export class Exercicio10Component {
  valor1: number = 10;
  valor2: number = 5;
  operacao: string = 'soma';
  
  operacoes = [
    { value: 'soma', label: 'Soma (+)' },
    { value: 'subtracao', label: 'Subtração (-)' },
    { value: 'multiplicacao', label: 'Multiplicação (*)' },
    { value: 'divisao', label: 'Divisão (/)' }
  ];
}
