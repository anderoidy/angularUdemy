import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewComponentComponent } from './new-component/new-component.component';
// import { InputComponent } from './input/input.component';
// import { OutputComponent } from './output/output.component';



@NgModule({
  declarations: [
    // NewComponentComponent,   atencao aqui
    // InputComponent,
    // OutputComponent
  ],
  exports: [
    // NewComponentComponent, InputComponent, OutputComponent e atencao aqui, pois aqui nao declara os novos compontentes
    // O novos componentes sao declarados lá no app.module apenas lá!
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
