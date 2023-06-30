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
    this.srvSesion.selectSesion$.pipe(takeUntil(this.elDestructor$)).subscribe({
      next: (data: any) => {
        console.log('Sesion: ', data);
        this.mostarAciones = data;
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
