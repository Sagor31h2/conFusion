import { Component, OnInit, Input } from "@angular/core";
import { Dish } from "../shared/dish";
import { from } from "rxjs";

@Component({
  selector: "app-dishdetial",
  templateUrl: "./dishdetial.component.html",
  styleUrls: ["./dishdetial.component.scss"],
})
export class DishdetialComponent implements OnInit {
  @Input()
  dish = Dish;

  constructor() {}

  ngOnInit() {}
}
