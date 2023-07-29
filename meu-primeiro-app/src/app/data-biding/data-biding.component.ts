
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})



export class DataBidingComponent {
  public nome: string = "Xavier"
  public mesagem: string = "ola tudo bem?"
  public idade: number = 42
  public maisUm: number = 1

  public position: { x: number, y: number} = { x: 0, y: 0}



  public sobrenome: string = "Pereira de Oliveira"

  public estadoDoBotao: boolean = false
  public imgSrC: string = "https://img.freepik.com/fotos-premium/mistura-de-tinta-colorida-na-agua-abstrato-colorido-para-design-generative-ai_170984-10851.jpg?w=360"
  public imgTitle: string = "Propet Binding"

  somar() {
    let varA: number = 5
    let varB: number = 3
    return varA + varB
  }


  mostrarMensagemErro() {
    return console.log("Erro tente mais tarde")
  }

  mostrarAlerta(valor: MouseEvent) {
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }



}
