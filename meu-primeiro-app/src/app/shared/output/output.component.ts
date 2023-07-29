import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {


@Output() public enviarDados = new EventEmitter()
public listx: Array<{nome: string, idade: number}> = [
  {nome:"Ander", idade: 42},
  {nome:"Andrew", idade: 12},
  {nome:"fabiana", idade: 36},
]

public getDados(event: number){
  //this.listx[event]
  //console.log(this.listx[event])
  this.enviarDados.emit(this.listx[event])
}

  ngOnInit(): void {

  }
}
