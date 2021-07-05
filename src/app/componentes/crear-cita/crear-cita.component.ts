import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  public fecha = '';
  public hora = '';
  public sintomas = '';
  public nombre = '';
  public formularioIncorrecto = false;

  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public agregarCita(){
    if((this.nombre == '')||(this.fecha == '')||(this.hora == '')||(this.sintomas == '')){
      this.formularioIncorrecto = true;
      return
    }
    this.formularioIncorrecto = false;

    const cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora : this.hora,
      sintomas: this.sintomas
    }
    this.nuevaCita.emit(cita);
    this.resetCampos();
  }

  public resetCampos(){
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }

}
