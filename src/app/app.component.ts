import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Calculadora Proyect';
  Number1: number = 0;
  Number2: number = 0;
  Resultado: number = 0;
  sumar() {
    this.Resultado = this.Number1 + this.Number2;
  }
  resta() {
    this.Resultado = this.Number1 - this.Number2;
  }
}
