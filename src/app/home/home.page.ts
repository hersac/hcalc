import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';
import { backspaceOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonText,
    IonIcon,
    IonButton,
  ],
})
export class HomePage {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;
  formula: string = '';
  historico: object[] = [];

  board: (number | string)[][] = [
    ['C', 'CE', '( )', '÷'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, ',', '<', '='],
  ];

  constructor() {
    addIcons({ backspaceOutline });
  }

  anotarValor(valorBoton: number | string): void {
    this.formula += valorBoton;
    this.resolucion(this.formula);
  }

  resolucion(formula: string) {
    let operadores = ['+', '-', 'x', '÷'];
    let numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let numero: string = '';
    let valor = 0;
    for(const caracter of formula ){
      const esOperador = operadores.includes(caracter);
      if(esOperador){
        valor = parseInt(numero);
        console.log("valor:", valor);
        return;
      }
      numero += caracter;
      console.log("numero:", numero)
    }
  }

}
