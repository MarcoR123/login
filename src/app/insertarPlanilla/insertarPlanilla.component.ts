import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';


@Component({
  selector: 'app-insertar',
  templateUrl: './insertarPlanilla.component.html',
  styleUrls: ['./insertarPlanilla.component.css']
})
export class InsertarPlanillaComponent {

  Concepto: string | undefined;
  Prioridad: number | undefined;
  TipoOperacion: string | undefined;
  Cuenta1: string | undefined;
  Cuenta2: string | undefined;
  Cuenta3: string | undefined;
  Cuenta4: string | undefined;
  MovimientoExcepcion1: string | undefined;
  MovimientoExcepcion2: string | undefined;
  MovimientoExcepcion3: string | undefined;
  Aplica_iess: string | undefined;
  Aplica_imp_renta: string | undefined;
  aplica_Proy_Renta: string | undefined;
  empresa_Afecta_Iess: string | undefined;
  apiResponse: any;

  constructor(private http: HttpClient,private router: Router) { } 
  
  
  onSubmit() {
    const url = `/api/Api/MovimientoPlanillaInsert?Concepto=${this.Concepto}&Prioridad=${this.Prioridad}&TipoOperacion=${this.TipoOperacion}&Cuenta1=${this.Cuenta1}&Cuenta2=${this.Cuenta2}&Cuenta3=${this.Cuenta3}&Cuenta4=${this.Cuenta4}&MovimientoExcepcion1=${this.MovimientoExcepcion1}&MovimientoExcepcion2=${this.MovimientoExcepcion2}&MovimientoExcepcion3=${this.MovimientoExcepcion3}`;
    
    const body = { Concepto: this.Concepto, Prioridad: this.Prioridad, TipoOperacion: this.TipoOperacion, Cuenta1: this.Cuenta1, Cuenta2: this.Cuenta2, Cuenta3: this.Cuenta3, Cuenta4: this.Cuenta4, MovimientoExcepcion1: this.MovimientoExcepcion1, MovimientoExcepcion2: this.MovimientoExcepcion2, MovimientoExcepcion3: this.MovimientoExcepcion3};
    this.http.get(url).subscribe(
      (response) => {
        console.log('Acción exitosa');
        this.router.navigate(['/movimientoPlanilla']);
      },
      (error) => {
        console.log('Error');
        this.router.navigate(['/movimientoPlanilla']);
      }
    );
  }

}