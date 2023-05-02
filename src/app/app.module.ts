import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// formsmodule para guardar datos para el backend
import { FormsModule } from '@angular/forms';

// mis componentes para el menú
import { CaminoEconomiaCircularComponent } from './camino-economia-circular/camino-economia-circular.component';
import { TemperaturaAbrilEspanaComponent } from './temperatura-abril-espana/temperatura-abril-espana.component';
import { AccionClimaticaSinPedirPerdonComponent } from './accion-climatica-sin-pedir-perdon/accion-climatica-sin-pedir-perdon.component';
import { ArleneBirtIpccComponent } from './arlene-birt-ipcc/arlene-birt-ipcc.component';
import { JardinesHuertosUrbanosComponent } from './jardines-huertos-urbanos/jardines-huertos-urbanos.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CaminoEconomiaCircularComponent,
    TemperaturaAbrilEspanaComponent,
    AccionClimaticaSinPedirPerdonComponent,
    ArleneBirtIpccComponent,
    JardinesHuertosUrbanosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
