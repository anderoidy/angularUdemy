import { FoodListService } from 'src/app/services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
  }

  public AdicionaComidaDoInput(value: string) {
    return this.foodListService.foodListAdd(value).subscribe(
      res => this.foodListService.foodListAlert(res),
      error => error
    )
  }
}
