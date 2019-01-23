import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { AlertComponent } from './component/modal/alert/alert.component';
@Injectable({
  providedIn: 'root'
})
export class MyNewServiceService {
  user$: Object;
  public sre: object;
  constructor(private http: HttpClient ,  public dialog: MatDialog) { }
  openInfoModal() {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '300px',
      data: ''
    });
  }
  openWarningModal() { }
  openErrorModal() { }
  openConfirmModal() { }
}
