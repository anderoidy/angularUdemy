import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {

  public condition: boolean = true
  public conditionClick: boolean = true

  public nomePessoa: string = ""
  public numeroDoBloco: string = ""
  public numeroApartamento: string = ""
  public date: Date = new Date()


  constructor() { }

  ngOnInit(): void {

  setInterval(() => {
      if(this.condition) {
        this.condition = false
      } else
      this.condition = true
    },2000)
  }

  clickTrocaEstado() {
    if(this.conditionClick) {
      this.conditionClick = false
    } else
    this.conditionClick = true
  }

  onClickAddPesNaList(){
    this.listNome.push({ nomePessoa: this.nomePessoa})
    this.nomePessoa = ""
    this.listBloco.push({ numeroDoBloco: this.numeroDoBloco})
    this.numeroDoBloco = ""
    this.listApartamento.push({ numeroApartamento: this.numeroApartamento})
    this.numeroApartamento = ""
  }

  public listNome: Array<{ nomePessoa: string }> =[
    // {nomePessoa: this.nomePessoa},
  ]

  public listBloco: Array<{ numeroDoBloco: string }> = [
    // {numeroDoBloco: this.numeroDoBloco}
  ]

  public listApartamento: Array<{ numeroApartamento: string }> = [
    // {numeroApartamento: this.numeroApartamento}
  ]

  public onClickEventListNome(event: number){
    this.listNome.splice(event, 1)
  }

  public onClickEventListBlo(event: number){
    this.listNome.splice(event, 1)
  }

  public onClickEventListAp(event: number){
    this.listNome.splice(event, 1)
  }

}
