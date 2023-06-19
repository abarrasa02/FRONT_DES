import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Models/categoria.model';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { ObjectResponse } from 'src/app/core/base/service/backend-service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  constructor(private readonly router: Router,
    private readonly categoriaService: CategoriaService
  ) {

  }
  categoriaSeleccionada: Categoria | null = null;
  listChecks: Array<boolean> = [];
  ListCategorias: Categoria[] = [];
  successMessage: string = "";
  errorMessage: string = "";
  idCategoria: Number;
  isOpenSuccessMessage: boolean = false;
  isOpenErrorMessage: boolean = false;





  ngOnInit(): void {
    this.cogerCategorias();
  }





  anadirCategoria() {
    this.router.navigate(['categoria-detail'])
  }
  editarCategoria(id:number) {
    this.router.navigate(['categoria-detail', id])
  }
  deleteCategoria(id: number) {
    this.categoriaService.deleteCategoria(id).subscribe(
      response => {
        console.log('Categoría eliminada con éxito', response);
        this.ListCategorias = [];
        this.cogerCategorias();
      },
      error => {
        console.error('Error al eliminar la categoría', error);
      }
    );
    this.ListCategorias = [];
    this.cogerCategorias();
  }

  selectedCategories() {

  }

  cogerCategorias() {
    this.categoriaService.getAllCategorias().subscribe({
      next: (response: ObjectResponse<Categoria[]>) => {
        if (response.success) {
          
          this.ListCategorias = response.message;
        } else {
          this.errorMessage = response.error;
          console.log(this.errorMessage)
        }
      }
    })
  }



}
