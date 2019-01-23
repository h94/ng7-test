import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyNewPipePipe } from './my-new-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { AlertComponent } from './component/modal/alert/alert.component';
import { CommonModule } from '@angular/common';
import { MyGuardGuard } from './my-guard.guard';
@NgModule({
  declarations: [
    AppComponent,
    MyNewDirectiveDirective,
    MyNewComponentComponent,
    MyNewPipePipe,
    AlertComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CommonModule,

  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
