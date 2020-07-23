import { Component, OnInit, Inject } from "@angular/core";
import { Dish } from "../shared/dish";

import { DishService } from "../services/dish.service";

//form
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Comment } from "./../shared/comment";

import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { from } from "rxjs";
import { switchMap } from "rxjs/operators";
import { visibility, flyInOut, expand } from "../animations/app.animation";

@Component({
  selector: "app-dishdetial",
  templateUrl: "./dishdetial.component.html",
  styleUrls: ["./dishdetial.component.scss"],
  host: {
    "[@flyInOut]": "true",
    style: "display: block;",
  },
  animations: [flyInOut(), visibility(), expand()],
})
export class DishdetialComponent implements OnInit {
  dish: Dish;
  dishIds: string[];
  errMess: string;
  prev: string;
  next: string;

  //rating form
  commentForm: FormGroup;
  comment: Comment;
  dishCopy: Dish;
  visibility = "shown";

  formErrors = {
    author: "",
    rating: 5,
    comment: "",
  };

  validationMessages = {
    author: {
      required: "Author is required.",
      minlength: "Author must be at least 2 characters long.",
    },
    comment: {
      required: "comment is required.",
      minlength: "comment must be at least 2 characters long.",
    },
  };

  constructor(
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,

    private fb: FormBuilder,
    @Inject("BaseURL") private BaseURL
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.dishservice
      .getDishIds()
      .subscribe((dishIds) => (this.dishIds = dishIds));

    this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.visibility = "hidden";
          return this.dishservice.getDish(params["id"]);
        })
      )
      .subscribe(
        (dish) => {
          this.dish = dish;
          this.dishCopy = dish;
          this.setPrevNext(dish.id);
          this.visibility = "shown";
        },
        (errMess) => (this.errMess = <any>errMess)
      );
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);

    this.prev = this.dishIds[
      (this.dishIds.length + index - 1) % this.dishIds.length
    ];
    this.next = this.dishIds[
      (this.dishIds.length + index + 1) % this.dishIds.length
    ];
  }

  goBack(): void {
    this.location.back();
  }

  private createForm(): void {
    this.commentForm = this.fb.group({
      author: ["", [Validators.required, Validators.minLength(2)]],
      rating: 5,
      comment: ["", [Validators.required, Validators.minLength(2)]],
    });

    this.commentForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    this.dishCopy.comments.push(this.comment);
    this.dishservice.putDish(this.dishCopy).subscribe(
      (dish) => {
        this.dish = this.dish;
        this.dishCopy = dish;
      },
      (errMess) => {
        this.dish = null;
        this.dishCopy = null;
        this.errMess = <any>errMess;
      }
    );
    this.commentForm.reset({
      author: "",
      rating: 5,
      comment: "",
    });
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + " ";
            }
          }
        }
      }
    }
  }
}
