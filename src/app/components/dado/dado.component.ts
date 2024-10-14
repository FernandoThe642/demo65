import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.scss'
})
export class DadoComponent implements OnInit {
  valor = 0
  @Input()  color:string = ''
  

  ngOnInit(): void {
     this.lanzar()
  }

  lanzar(){
    this.valor = Math.trunc(Math.random()*6) + 1
  }
}
