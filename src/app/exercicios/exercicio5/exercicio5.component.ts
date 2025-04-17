import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component {
  status: string = 'pendente';
  
  statusOptions = [
    { value: 'pendente', label: 'Pendente' },
    { value: 'enviado', label: 'Enviado' },
    { value: 'entregue', label: 'Entregue' },
    { value: 'outro', label: 'Outro' }
  ];
}
