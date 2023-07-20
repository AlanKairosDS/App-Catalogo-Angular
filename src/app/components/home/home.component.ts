import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { LoaderComponent } from '../loader/loader.component';
import { CategoriasService } from 'src/app/services/categorias.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private dialog: MatDialog, private categoria: CategoriasService) {}

  mostrarLoader(): void {
    let loader = this.dialog.open(LoaderComponent, { disableClose: true });
    this.categoria.consultar_categorias().subscribe({
      next: () => {
        loader.close();
        let modalSuccess = this.dialog.open(ModalComponent, { disableClose: true, autoFocus: false });
        modalSuccess.componentInstance.header = 'Proceso Exitoso';
        modalSuccess.componentInstance.image = 'assets/images/logos/movie_logo.png';
        modalSuccess.componentInstance.message = 'Se realiza la consulta de forma exitosa';
        modalSuccess.componentInstance.buttonSuccess = true;
        modalSuccess.componentInstance.msgButtonSuccess = 'Continuar';
        modalSuccess.componentInstance.buttonError = false;
      },
      error: (err: HttpErrorResponse) => {
        loader.close();
        let modalError = this.dialog.open(ModalComponent, { disableClose: true, autoFocus: false });
        modalError.componentInstance.header = 'Proceso Fallido';
        modalError.componentInstance.image = 'assets/images/logos/movie_logo.png';
        modalError.componentInstance.message = 'Ocurrio un problema al realizar la consulta.';
        modalError.componentInstance.buttonSuccess = false;
        modalError.componentInstance.buttonError = true;
        modalError.componentInstance.msgButtonError = 'Continuar';
      },
    });
  }
}
