import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Perro } from '../../domain/perro';
import { PerrosfbService } from '../../services/perrosfb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perros.component.html',
  styleUrl: './perros.component.scss'
})
export class PerrosComponent {

  perro: Perro = new Perro()
  perros: any

  constructor(private perrosFBService: PerrosfbService){

  }

  // Cargar lista de perros al iniciar:
  ngOnInit(): void {
    this.cargarPerros()
  }

  cargarPerros(){
    this.perrosFBService.obtenerPerros().subscribe(perros => {
      this.perros = perros
    })
  }

  guardarPerro(form: any) {
    if (this.perro["id"]) {
      this.perrosFBService.actualizarPerro(this.perro["id"], this.perro).then(() => {
        this.cargarPerros();
      });
    } else {
      this.perro = {
        nombre: this.perro.nombre,
        raza: this.perro.raza
      }
      this.perrosFBService.guardarPerro(this.perro).subscribe(() => {
        this.cargarPerros(); // Recargar la lista de perros después de guardarlo
      });
    }
    form.resetForm();
    this.perro = new Perro();
  }
  

  borrar(id: string) {
    this.perrosFBService.borrarPerro(id)
  }

  seleccionar(id: string) {
    const perroSeleccionado = this.perros.find((p: any) => p["id"] === id);
    if (perroSeleccionado) {
      this.perro = { ...perroSeleccionado }; // Clonar el perro seleccionado
    }
  }
  



  


}
