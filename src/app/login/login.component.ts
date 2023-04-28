import { Component } from '@angular/core';
import { EmisorService } from '../shared/emisor.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser'; 
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'; 
// import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  emisores: any;
  selectedEmisor: string;
  mensajeError: any;
  username!: string;  
  password!: string; 
  emisorComp: any; 
  dialog: any;
   
  constructor(private http: HttpClient,private sanitizer: DomSanitizer,private emisorService: EmisorService,private router: Router) { 
    this.selectedEmisor= '';  

  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: '¿Estás seguro de que quieres realizar esta acción?',
        buttonText: {
          ok: 'Ok',
        }
      }
    });
  
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        // Si el usuario hace clic en "Sí" en el cuadro de diálogo, realiza la acción
        console.log('Acción confirmada');
      } else {
        // Si el usuario hace clic en "Cancelar" en el cuadro de diálogo, no hace nada
        console.log('Acción cancelada');
      }
    });
  }


 

  onlyNumbers(event: KeyboardEvent) {
    const input = event.key;
    const isNumber = /^[0-9]+$/.test(input);
    const isAllowedKey = event.code === 'Backspace' || event.code === 'Delete' || event.code === 'Tab';
  
    if (!isNumber && !isAllowedKey) {
      event.preventDefault();
    }
  }
  
  


  ngOnInit() {
    this.http.get<any>('api/Api/api/v1/emisores')
      .subscribe((data: any[]) => {
        this.emisores = data.map(emisor => emisor.NombreEmisor);
        console.log(this.emisores); 
      });
      
  }
  

  onChangeEmisor(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedIndex = target.selectedIndex;
    const emisorId = target.options[selectedIndex].value;
    const emisorNombre = target.options[selectedIndex].textContent;
    console.log('Emisor seleccionado:', emisorId);
    console.log('Nombre del emisor seleccionado:', emisorNombre);
    this.emisorComp = emisorNombre;
    this.selectedEmisor = emisorId;
  }

  onSubmit() {


    if (!this.username || !this.password || !this.emisorComp) {
      
      alert('Datos incorrectos');
      return;
    }
    else{
      const loginData = {
        usuario: this.username,
        contrasena: this.password
      };
      
      
      this.http.post('/api/Api/login', loginData)
        .subscribe(response => {
          
        const data = JSON.stringify(response);
        const responseObj = JSON.parse(data);
          
        const emisorData = {
        nombre: responseObj[0].NOMBREEMISOR,
        ruc: responseObj[0].RucUsuario,
      };
      if (this.emisorComp === emisorData.nombre) {
       
        alert('Usuario y contraseña correctos.');
        this.emisorService.updateEmisorData(emisorData);
        this.router.navigate(['/home']); // aquí se navega a la ruta /home
  
      } else {
        // mostrar mensaje de error o hacer otra acción
        alert('Datos incorrectos');
        
      }
  
  
        }, error => {
          console.log(error);
          alert('Datos incorrectos');
        });
    }
  
    
    
  }
  
  
  
}