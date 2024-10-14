import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  codigo = 0;
  descripcion = '';
  precio = 0;
  articulos =[
    {codigo:1, descripcion:"TV", precio:120},
    {codigo:2, descripcion:"Microondas", precio:356},
    {codigo:3, descripcion:"Licuadora", precio:40},
    {codigo:4, descripcion:"Lisscuadora", precio:40}
  ]
  ngOnInit(): void {
    this.guardar()
    this.articulos
 }
  guardar(){
    const artExiste = this.articulos.find(articulo => articulo.codigo === this.codigo);
  
    if (artExiste) {
      artExiste.descripcion = this.descripcion;
      artExiste.precio = this.precio;

    } else {
      const artNuevo = {
        codigo: this.codigo,
        descripcion: this.descripcion,
        precio: this.precio
      };
      this.articulos.push(artNuevo);
    }

    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }

}
