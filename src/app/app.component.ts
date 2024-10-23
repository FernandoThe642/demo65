import { CommonModule } from '@angular/common';
import { Component,  ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DadoComponent } from "./components/dado/dado.component";
import { CronometroComponent } from "./components/cronometro/cronometro.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { GestionPerrosService } from './gestion-perros.service';
import { AcercaDeComponent } from "./pages/acerca-de/acerca-de.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent, FormularioComponent, AcercaDeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  // title = 'Demostración';
  // name = 'Carlos';
  // edad = 15;
  // salario = 800;
  // sueldos = [1700, 500, 950, 450];

  // contador = 0;
  // a=0;
  // b=0;
  // c=0;

//Botones borrar y seleccionar 

// @ViewChild('articulos') articulos!: FormularioComponent;
//   articulos =[
//     {codigo:1, descripcion:"TV", precio:120},
//     {codigo:2, descripcion:"Microondas", precio:356},
//     {codigo:3, descripcion:"Licuadora", precio:40}
//   ]

//   codigo = 0;
//   descripcion = '';
//   precio = 0;

//   guardar(){
//     const artExiste = this.articulos.find(articulo => articulo.codigo === this.codigo);
  
//     if (artExiste) {
//       artExiste.descripcion = this.descripcion;
//       artExiste.precio = this.precio;

//     } else {
//       const artNuevo = {
//         codigo: this.codigo,
//         descripcion: this.descripcion,
//         precio: this.precio
//       };
//       this.articulos.push(artNuevo);
//     }

//     this.codigo = 0;
//     this.descripcion = '';
//     this.precio = 0;
//   }

//   borrar(codigo: number) {
//     this.articulos = this.articulos.filter(articulo => articulo.codigo !== codigo);
//   }

//   seleccionar(codigo: number){
//     const artSeleccionado = this.articulos.find(articulo => articulo.codigo === codigo);
  
//     if (artSeleccionado) {
//       this.codigo = artSeleccionado.codigo;
//       this.descripcion = artSeleccionado.descripcion;
//       this.precio = artSeleccionado.precio;
//     }
//  }



  //Lanzar dados

    // mostrarImagen: boolean = false;
  
    // @ViewChild('dado1') dado1!: DadoComponent;
    // @ViewChild('dado2') dado2!: DadoComponent;
    // @ViewChild('dado3') dado3!: DadoComponent;

    
    // lanzar() {
 
    //   this.mostrarImagen = false;

    //   this.dado1.lanzar();
    //   this.dado2.lanzar();
    //   this.dado3.lanzar();
    
    //   if(this.dado1.valor==this.dado2.valor||this.dado1.valor==this.dado3.valor||this.dado3.valor==this.dado2.valor){
    //     console.log('Ganaste')
    //     this.mostrarImagen = true;
    //   }
      
    // }


  
    //Cronometro
    // minuto =0
    // actualizar(estado: boolean){
    //   if (estado) {
    //     this.minuto++
    //   }
    // }
  
    // actualizar(estado:boolean) {
    //   if(estado==true){
    //     this.minuto++}
    // }

 
 
  // esMayorDeEdad() {
  //   if(this.edad >= 18)
  //   {
  //     return 'Es mayor de edad'
  //   }
  //   else{
  //     return 'Es menor de edad'
  //   }
  // }

  // incrementar() {
  //   this.contador = this.contador + 1;
  // }

  // sumar() {
  //   this.c = this.a + this.b;
  // }


  // perros: any

  // constructor(private perrosService: GestionPerrosService) {

  // }

  // ngOnInit(): void {
  //   this.perrosService.addPerros('Renzo','Bessagle')
  //   this.perrosService.addPerros('Rambo','koker')
  //   this.perros = this.perrosService.getPerros()
  // }


  
}
