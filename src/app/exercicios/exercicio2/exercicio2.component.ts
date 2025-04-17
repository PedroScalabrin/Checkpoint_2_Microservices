import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component {
  itens: string[] = ["Maçã", "Banana", "Leite"];
  
  limparLista() {
    this.itens = [];
  }
  
  adicionarItens() {
    this.itens = ["Maçã", "Banana", "Leite"];
  }
}
