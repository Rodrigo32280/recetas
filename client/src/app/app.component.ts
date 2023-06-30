import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router, RoutesRecognized } from '@angular/router';
import { SesionService } from './core/service/sesion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecetasService } from 'src/app/core/service/recetas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  showModal: boolean = false;

  title = 'app';

  mostarAciones!: boolean;

  private elDestructor$ = new Subject<any>();

  showLoading: boolean = true;
  private destroy$ = new Subject<any>();
  myForm!: FormGroup;
  dataReceta: any = {};

  constructor(
    public srvSesion: SesionService,
    private srvRecetas: RecetasService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.srvSesion.selectSesion$
      .pipe(takeUntil(this.elDestructor$))
      .subscribe({
        next: (data: any) => {
          console.log('Sesion: ', data);
          this.mostarAciones = data;
        },
      });

    this.myForm = this.fb.group({
      id_receta: ['', [Validators.required]],
      str_receta_nombre: ['', [Validators.required]],
      str_autor_nombre: ['', [Validators.required]],
      str_autor_telefono: ['', [Validators.required]],
      str_autor_correo: ['', [Validators.required]],
      str_receta_dificultad: ['', [Validators.required]],
      str_receta_image: ['', [Validators.required]],
      str_receta_preparacion: ['', [Validators.required]],
    });
  }

  getReceta() {
    this.srvRecetas
      .getRecetas()
      .pipe(takeUntil(this.elDestructor$))
      .subscribe({
        next: (data: any) => {
          console.log('Llegaron los datos', data);
          this.srvRecetas.almacenadorD = data.body;
          console.log('datos del servicio: ', this.srvRecetas.almacenadorD);
        },
        error: (errorsito) => {
          console.log(errorsito);
        },
      });
  }

  crearReceta() {
  const receta = {
    str_receta_nombre: this.myForm.value.str_receta_nombre,
    str_autor_nombre: this.myForm.value.str_autor_nombre,
    str_autor_telefono: this.myForm.value.str_autor_telefono,
    str_autor_correo: this.myForm.value.str_autor_correo,
    str_receta_image: this.myForm.value.str_receta_image,
    str_receta_preparacion: this.myForm.value.str_receta_preparacion,
    str_receta_dificultad: this.myForm.value.str_receta_dificultad
  };

    console.log(receta);
     this.srvRecetas.crearReceta(receta)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: any) => {
          console.log('Receta creada', data);
          this.getReceta();
          this.myForm.reset();
          this.showModal = false;
        },
        error: (error: any) => {
          console.log('Error al crear la receta', error);
        },
      });
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  cerrarSesion() {
    this.srvSesion.setSesion(false);
  }

  ngOnDestroy(): void {
    this.elDestructor$.next(true);
    this.elDestructor$.unsubscribe(); 
  }
}