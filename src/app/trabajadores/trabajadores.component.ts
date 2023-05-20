import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EmisorService } from '../shared/emisor.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';  

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent {
trabajo: any;
trabajadores: any[] = [];
datos: any;
apiResponse: any;
busqueda: string = '';
nombreBusqueda: string = '';
emisorComp: any;
  emisorId: any;


constructor(private http: HttpClient,private sanitizer: DomSanitizer, private emisorService: EmisorService,private router: Router) { 
}

ngOnInit() {
  this.http.get<any[]>('/api/Api/api/v1/trabajadores').subscribe(
    data => {
      this.trabajadores = data;
      console.log(this.trabajadores)
    },
    error => {
      console.log(error);
    }
  );
    
}
}

