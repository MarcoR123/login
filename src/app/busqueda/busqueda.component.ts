import { Component, OnInit, ViewChild } from '@angular/core';
import { EmisorService } from '../shared/emisor.service';
import { DomSanitizer } from '@angular/platform-browser';  
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  centroCostos: any[] = [];
  datos: any;
  codigo: number | undefined;
  descripcion: string | undefined;
  busqueda: string = '';
  nuevosResultados: boolean = false;
  logoUrl:any;


  constructor(private emisorService: EmisorService,private sanitizer: DomSanitizer, private http: HttpClient,private router: Router) {


   }

  buscarCentroCostos() {
    this.http.get<any[]>(`api/Api/api/centrocostos/search=${this.busqueda}`).subscribe(
      (resultados) => {
        this.centroCostos = resultados;
        console.log(this.centroCostos);
        console.log('Acción exitosa');
        this.nuevosResultados = true;
        if(this.centroCostos===null)
        {
          console.log('No se encuentra el Centro de Costos');
        }
      },
      (error) => {
        console.log(error);
        console.log('No se encuentra el Centro de Costos');
      }
    );

  }
}