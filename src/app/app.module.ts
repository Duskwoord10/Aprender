import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {
  Number1: number = 0;
  Number2: number = 0;
  Resultado: number = 0;
  sumar() {
    this.Resultado = this.Number1 + this.Number2;
  }
  Restar() {
    this.Resultado = this.Number1 - this.Number2;
  }
}
