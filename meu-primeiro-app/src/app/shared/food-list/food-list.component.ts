import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

//Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  // public foodList: FoodList | any;
  public foodList: Array<FoodList> = []

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => console.log(error)
    );
    // this.foodList = this.foodListService.foodList()

    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`olha vc adicionou => ${res.nome}`)
        return this.foodList.push(res)
      }
    );
  }
}