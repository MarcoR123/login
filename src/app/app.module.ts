import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InsertarComponent } from './insertar/insertar.component';
import { EditarComponent } from './editar/editar.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MovimientoPlanillaComponent } from './movimiento-planilla/movimiento-planilla.component';
import { InsertarPlanillaComponent } from './insertarPlanilla/insertarPlanilla.component';
import { EditarPlanillaComponent } from './editarPlanilla/editarPlanilla.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InsertarComponent,
    EditarComponent,
    BusquedaComponent,
    ConfirmationDialogComponent,
    FilterPipe,
    MovimientoPlanillaComponent,
    InsertarPlanillaComponent,
    EditarPlanillaComponent,
    TrabajadoresComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
