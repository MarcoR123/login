import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EmisorService } from '../shared/emisor.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';  

@Component({
  selector: 'app-movimiento-planilla',
  templateUrl: './movimiento-planilla.component.html',
  styleUrls: ['./movimiento-planilla.component.css']
})
export class MovimientoPlanillaComponent {
planilla: any;
movimientoPlanilla: any[] = [];
codigoConcepto: string | undefined;
empresa_Afecta_Iess: string | undefined;
concepto: string | undefined;
aplica_iess: string | undefined;
datos: any;
apiResponse: any;
busqueda: string = '';
nombreBusqueda: string = '';


constructor(private http: HttpClient,private sanitizer: DomSanitizer, private emisorService: EmisorService,private router: Router) { 
   

}


  ngOnInit() {
    this.http.get<any[]>('api/Api/api/v1/movimientoplanilla').subscribe(
      data => {
        this.movimientoPlanilla = data;
        console.log(this.movimientoPlanilla)
      },
      error => {
        console.log(error);
      }
    );
      
  }


  nuevoMovimientoPlanilla() {
    this.router.navigate(['/insertarPlanilla']);
  }

  buscarMovimientoPlanilla(){
    this.router.navigate(['/busqueda']);
  }


  eliminarMovimientoPlanilla(codigoConcepto: number) { //, descripcionomovimiento: string
    const params = new HttpParams()
        .set('codigomovimiento', codigoConcepto.toString());
        // .set('descripcionomovimiento', descripcionomovimiento);

    if (confirm('¿Está seguro que desea eliminar este elemento?')) {
      this.http.get('api/Api/api/movimientoplanilla/delete?', { params }).subscribe(result => {
        console.log(result);
        alert('Elimando');
      }, error => {
        console.error(error);
        alert('Error');
      });
    }
  }

}

