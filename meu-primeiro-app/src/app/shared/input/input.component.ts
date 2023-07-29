import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{

  @Input() public contador: number = 0

  public AddContador(){
    this.contador += 1
  }

  public RemovContador(){
    this.contador -= 1
  }
    constructor() { }

    ngOnInit(): void {

    }
}
