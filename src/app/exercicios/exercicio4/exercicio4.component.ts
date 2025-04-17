import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component {
  tarefas: string[] = ["Estudar Angular", "Fazer exercícios", "Revisar código"];
  
  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
  
  restaurarTarefas() {
    this.tarefas = ["Estudar Angular", "Fazer exercícios", "Revisar código"];
  }
}
