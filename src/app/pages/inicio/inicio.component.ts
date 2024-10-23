import { CommonModule } from '@angular/common';
import { Component,  ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DadoComponent } from '../../components/dado/dado.component';
import { CronometroComponent } from "../../components/cronometro/cronometro.component";
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { GestionPerrosService } from '../../gestion-perros.service';
import { AcercaDeComponent } from "../../pages/acerca-de/acerca-de.component";
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent, FormularioComponent, AcercaDeComponent, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  title = 'Demostración';
  name = 'Carlos';
  edad = 15;
  salario = 800;
  sueldos = [1700, 500, 950, 450];

  contador = 0;
  a=0;
  b=0;
  c=0;
  esMayorDeEdad() {
    if(this.edad >= 18)
    {
      return 'Es mayor de edad'
    }
    else{
      return 'Es menor de edad'
    }
  }

  incrementar() {
    this.contador = this.contador + 1;
  }

  sumar() {
    this.c = this.a + this.b;
  }


// Articulos

   articulos: Articulo[] = [];
   codigo: number | null = null;
   descripcion: string = '';
   precio: number | null = null;
 
  
cargarArticulo(codigo: number) {
     const articulo = this.articulos.find(a => a.codigo === codigo);
     if (articulo) {
       this.codigo = articulo.codigo;
       this.descripcion = articulo.descripcion;
       this.precio = articulo.precio;
     }
 }
 
  
guardarArticulo(articulo: { codigo: number; descripcion: string; precio: number }) {
     const index = this.articulos.findIndex(a => a.codigo === articulo.codigo);
     if (index > -1) {
       this.articulos[index] = articulo;
     } else {
       this.articulos.push(articulo);
     }    
}
 
borrarArticulo(codigo: number) {
     this.articulos = this.articulos.filter(a => a.codigo !== codigo);
     this.limpiarFormulario();
}
 
   
limpiarFormulario() {
     this.codigo = null;
     this.descripcion = '';
     this.precio = null;
}



//Dados:
mostrarImagen: boolean = false;
  
@ViewChild('dado1') dado1!: DadoComponent;
@ViewChild('dado2') dado2!: DadoComponent;
@ViewChild('dado3') dado3!: DadoComponent;


lanzar() {

  this.mostrarImagen = false;

  this.dado1.lanzar();
  this.dado2.lanzar();
  this.dado3.lanzar();

  if(this.dado1.valor==this.dado2.valor||this.dado1.valor==this.dado3.valor||this.dado3.valor==this.dado2.valor){
    console.log('Ganaste')
    this.mostrarImagen = true;
  }
  
}




// Tabla perros:
perros: any

  constructor(private perrosService: GestionPerrosService) {

  }

  ngOnInit(): void {
    this.perrosService.addPerros('Carlos','Dalmata')
    this.perrosService.addPerros('Firulais','Boxer')
    this.perros = this.perrosService.getPerros()
  }

}

interface Articulo {
  codigo: number;
  descripcion: string;
  precio: number;
}
