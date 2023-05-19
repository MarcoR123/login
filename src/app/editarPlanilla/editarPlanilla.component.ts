import { Component, OnInit } from '@angular/core';
import { EmisorService } from '../shared/emisor.service';
import { DomSanitizer } from '@angular/platform-browser';  
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editarPlanilla.component.html',
  styleUrls: ['./editarPlanilla.component.css']
})
export class EditarPlanillaComponent {

  codigoConcepto: any;
  concepto: string | undefined;
  prioridad: number | undefined;
  tipoOperacion: string | undefined;
  cuenta1: string | undefined;
  cuenta2: string | undefined;
  cuenta3: string | undefined;
  cuenta4: string | undefined;
  movimientoExcepcion1: string | undefined;
  movimientoExcepcion2: string | undefined;
  movimientoExcepcion3: string | undefined;
  aplica_iess: string | undefined;
  aplica_imp_renta: string | undefined;
  aplica_Proy_Renta: string | undefined;
  empresa_Afecta_Iess: string | undefined;
  planilla: any;
movimientoPlanilla: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.codigoConcepto = Number(params.get('id'));
        });
  }

  guardarCambios(): void {
    const url = `/api/Api/MovimientoPlanillaEdit?CodigoConcepto=${this.codigoConcepto}&Concepto=${this.concepto}&Prioridad=${this.prioridad}&TipoOperacion=${this.tipoOperacion}&Cuenta1=${this.cuenta1}&Cuenta2=${this.cuenta2}&Cuenta3=${this.cuenta3}&Cuenta4=${this.cuenta4}&MovimientoExcepcion1=${this.movimientoExcepcion1}&MovimientoExcepcion2=${this.movimientoExcepcion2}&MovimientoExcepcion3=${this.movimientoExcepcion3}`;
    
    const body = { CodigoConcepto: this.codigoConcepto, Concepto: this.concepto, Prioridad: this.prioridad, TipoOperacion: this.tipoOperacion, Cuenta1: this.cuenta1, Cuenta2: this.cuenta2, Cuenta3: this.cuenta3, Cuenta4: this.cuenta4, MovimientoExcepcion:this.movimientoExcepcion1, MovimientoExcepcion2: this.movimientoExcepcion2, MovimientoExcepcion3: this.movimientoExcepcion3};
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