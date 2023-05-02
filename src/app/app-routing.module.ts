import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaminoEconomiaCircularComponent } from './camino-economia-circular/camino-economia-circular.component';
import { TemperaturaAbrilEspanaComponent } from './temperatura-abril-espana/temperatura-abril-espana.component';
import { AccionClimaticaSinPedirPerdonComponent } from './accion-climatica-sin-pedir-perdon/accion-climatica-sin-pedir-perdon.component';
import { ArleneBirtIpccComponent } from './arlene-birt-ipcc/arlene-birt-ipcc.component';
import { JardinesHuertosUrbanosComponent } from './jardines-huertos-urbanos/jardines-huertos-urbanos.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "",
  component: CaminoEconomiaCircularComponent },
  {path: "camino-economia-circular",
  component: CaminoEconomiaCircularComponent },
  {path: "temperatura-abril-espana",
  component: TemperaturaAbrilEspanaComponent},
  {path: "accion-climatica-sin-pedir-perdon",
  component: AccionClimaticaSinPedirPerdonComponent},
  {path: "arlene-birt-ipcc",
  component: ArleneBirtIpccComponent},
  {path: "jardines-huertos-urbanos",
  component: JardinesHuertosUrbanosComponent},
  {path: "login",
  component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
