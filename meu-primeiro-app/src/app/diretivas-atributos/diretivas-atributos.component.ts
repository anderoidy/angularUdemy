import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent {

  public valor: boolean = true
  public heightPx:string = "20px"
  public AddbackgroundColor: string = "red"
  public condicaoNgIf: string = ""

  ngOnInit(){



    setInterval(() => {
      if(this.valor) {
        this.valor = false
      } else
      this.valor = true

      if(this.heightPx == "20px") {
          this.heightPx = "50px"
          this.AddbackgroundColor = "green"
        } else
        this.heightPx ="20px"
      },2000)
  }
}
