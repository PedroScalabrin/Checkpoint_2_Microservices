import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  nome: string;
  preco: number;
  promocao: boolean;
}

@Component({
  selector: 'app-exercicio9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio9.component.html',
  styleUrls: ['./exercicio9.component.css']
})
export class Exercicio9Component {
  produtos: Produto[] = [
    { nome: "Notebook", preco: 3000, promocao: true },
    { nome: "Mouse", preco: 50, promocao: false }
  ];
  
  limparProdutos() {
    this.produtos = [];
  }
  
  restaurarProdutos() {
    this.produtos = [
      { nome: "Notebook", preco: 3000, promocao: true },
      { nome: "Mouse", preco: 50, promocao: false }
    ];
  }
}
