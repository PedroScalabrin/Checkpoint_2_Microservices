import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio8',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio8.component.html',
  styleUrls: ['./exercicio8.component.css']
})
export class Exercicio8Component {
  email: string = '';
  senha: string = '';
  
  validarCredenciais(): string {
    if (!this.email || !this.senha) {
      return 'vazio';
    } else if (!this.email.includes('@') || this.senha.length < 6) {
      return 'invalido';
    } else {
      return 'valido';
    }
  }
}
