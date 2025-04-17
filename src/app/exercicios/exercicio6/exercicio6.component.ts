import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Usuario {
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-exercicio6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.css']
})
export class Exercicio6Component {
  usuarios: Usuario[] = [
    { nome: "Ana", idade: 25 },
    { nome: "Carlos", idade: 30 }
  ];
  
  limparUsuarios() {
    this.usuarios = [];
  }
  
  restaurarUsuarios() {
    this.usuarios = [
      { nome: "Ana", idade: 25 },
      { nome: "Carlos", idade: 30 }
    ];
  }
}
