import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { Categoria } from '../Models/categoria.model';
import { OPERACION } from '../Utils/constantes';

@Component({
  selector: 'app-categoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: ['./categoria-detail.component.scss']
})
export class CategoriaDetailComponent implements OnInit {
  categoria: Categoria = {
    id: 0,
    nombre: '',
    imagen: null,
    activo: ''
  };
  showError=false;s
  errorMensaje: string = '';
  errorMensajeImage: string = '';
  isSubmit:boolean=false
  op: OPERACION = OPERACION.NEW;
  OPS = OPERACION;
  imagenBase64: string = "";
  idCategoria:number;
  imagenCat:File=null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly categoriaService: CategoriaService,
    private readonly route: Router,
  ) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params && params['id']) {
        this.op = this.OPS.EDIT;
        this.idCategoria = params['id'];
        this.fillForm(this.idCategoria);

      } else {
        this.op = this.OPS.NEW;
      }
    });
  }
  
  onFileChange(event) {

    const file: File = event.target.files[0];
    if (file && file.type === 'image/jpeg') {
      this.imagenCat = file; // Asigna el archivo a la variable imagenCat
      this.errorMensajeImage = ''; // Reinicia el mensaje de error si el archivo es una imagen JPEG
      this.isSubmit=true;
      // Realiza las acciones adicionales necesarias para la imagen JPEG
    } else {
      this.isSubmit=false
      this.imagenCat = null; // Reinicia la variable imagenCat si el archivo no es una imagen JPEG
      this.errorMensajeImage = 'Debe seleccionar un archivo de imagen JPEG (.jpg)'; // Establece el mensaje de error
    }
    this.imagenCat=event.target.files[0];
  }
  

  fillForm(id:any){
     this.categoriaService.findById(id).subscribe({
      next:(response)=>{
       if(response.success){
         this.categoria=response.message
        ;
       }else{
         console.log("error")
       }
      }
     })
   }
  volver(){
    this.route.navigate(['categoria'])
  }
  onSubmit() {
    if (!this.categoria.nombre.trim() || !this.categoria.activo.trim()) {
      this.showError = true;
      this.errorMensaje = 'Por favor, complete todos los campos antes de enviar.';
      
      return;
    }

    if(this.op==this.OPS.NEW){
      this.categoriaService.addCategoria(this.categoria).subscribe(
      (response) => {
        console.log(response);
        this.categoriaService.addImagenCategoria(this.imagenCat,response.message).subscribe((response)=>{
          console.log("Se ha añadido correctmente la imagen")
          this.route.navigate(['categoria'])
        })
        // Aquí puedes manejar la respuesta, como mostrar un mensaje de éxito.
      },
      (error) => {
        console.error('Error al añadir la categoría', error);
        // Aquí puedes manejar errores, como mostrar un mensaje de error.
      }
    );
    }else if(this.op=this.OPS.EDIT){
        this.categoriaService.editCategoria(this.categoria,this.idCategoria).subscribe((response)=>{
          this.categoriaService.addImagenCategoria(this.imagenCat,response.message).subscribe((response)=>{
            console.log("Se ha añadido correctmente la imagen")
            this.route.navigate(['categoria'])
          })
        }),
         (error) => {
      console.error('Error al añadir la categoría', error);
      // Aquí puedes manejar errores, como mostrar un mensaje de error.
    }
    }
   
    
  }
 
}
