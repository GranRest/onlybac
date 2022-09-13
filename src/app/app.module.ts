import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SliderpaginasComponent } from './components/sliderpaginas/sliderpaginas.component';
import { CuentasgComponent } from './components/cuentas/cuentasg/cuentasg.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SliderComponent,
    ContactoComponent,
    SliderpaginasComponent,
    CuentasgComponent,
    PreguntasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
