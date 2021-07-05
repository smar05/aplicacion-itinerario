import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas:any[]=[];

  public agregarCita(cita:any){
    this.listCitas.push(cita);
  }

  public eliminarCitaListado(index:number){
    this.listCitas.splice(index,1);
  }
}
