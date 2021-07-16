import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoangComponent } from './hoang/hoang.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { FontSizeEditor2Component } from './font-size-editor2/font-size-editor2.component';
import { FormsModule } from '@angular/forms';
import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    HoangComponent,
    FontSizeEditorComponent,
    FontSizeEditor2Component,
    PetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
