import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CuentasgComponent } from './components/cuentas/cuentasg/cuentasg.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cuentas', component: CuentasgComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
