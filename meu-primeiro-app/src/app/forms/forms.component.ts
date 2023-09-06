import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{comida: string, preco: string}> = [
    { comida: "X salada", preco: "R$ 10" },
    { comida: "X Bacon", preco: "R$ 11"},
    { comida: "X tudo", preco: "R$ 12"},
    { comida: "coxinha", preco: "R$ 13"}
  ]
  constructor() { }

  ngOnInit(): void {

  }

  public MtdSubmitForm(submitForm: NgForm) {
    console.log(submitForm.value)
  }
}
