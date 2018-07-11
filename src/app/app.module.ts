import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormWizardModule } from 'angular2-wizard';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormWizardModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
