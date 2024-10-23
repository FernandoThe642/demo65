import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  @Input() codigo: number | null = null; 
  @Input() descripcion: string = ''; 
  @Input() precio: number | null = null; 
  @Output() guardarArticulo = new EventEmitter<{ codigo: number; descripcion: string; precio: number }>();
  @Output() borrarArticulo = new EventEmitter<number>(); 

  guardar() {

    const articulo = {
      codigo: this.codigo!,
      descripcion: this.descripcion,
      precio: this.precio!
    };

    this.guardarArticulo.emit(articulo);   
    this.limpiarFormulario(); 
  }

  limpiarFormulario() {
    this.codigo = null;
    this.descripcion = '';
    this.precio = null;
  }

}
