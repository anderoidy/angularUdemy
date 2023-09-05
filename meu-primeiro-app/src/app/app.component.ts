import { NewComponentComponent } from './shared/new-component/new-component.component';
import { Component, OnInit } from '@angular/core';
import { InputComponent } from './shared/input/input.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';

@Component({
  selector: 'app-root',
  template: `

  <app-new-component></app-new-component>

<ng-template [ngIf]="getDados">
<h1>{{getDados.nome}}</h1>
<h2>{{getDados.idade}}</h2>
</ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
  <app-input> [contador] ="addValue"</app-input>
  <app-food-list></app-food-list>
  <app-food-add></app-food-add>
  <app-forms></app-forms>



  <app-diretivas-estruturais>
    <!-- <h1>H1 com hr em baixo dentro do estrutural</h1>
    <hr> -->
  </app-diretivas-estruturais>
  <!-- <app-diretivas-atributos> -->

    <!-- <h2>H2 e hr declarado em cima la onde ta o router-outlat</h2>

    <h1>H1 e hr declarado em baixo no app componente la onde ta o router outlate</h1>

    <h3>Ola eu sou o h3 criado em app.componente e chamado pelo ng-selector la no atributos.html</h3> -->

<!--
  </app-diretivas-atributos> -->
  <!-- <app-data-biding></app-data-biding> -->
  `
})
export class AppComponent implements OnInit {

public addValue: number = 10
public getDados:{nome: string, idade: number} | undefined

  constructor() {}

  ngOnInit(): void {}

public setDados(event: {nome: string, idade: number}) {
this.getDados = event
}

}
