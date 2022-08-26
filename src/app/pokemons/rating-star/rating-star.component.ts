import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
    selector: "rating-star",
    templateUrl: "rating-star.component.html",
    styleUrls: ["rating-star.component.scss"]
  }
)
export class RatingStarComponent implements OnInit {
  @Input("rating") rating: number = 3
  @Output() ratingUpdated = new EventEmitter()
  @Input("readOnly") readonly: boolean = false

  totalStar: number = 5
  ratingArray: number[] = []

  constructor() {
    for (let i = 0; i < this.totalStar; i++) {
      this.ratingArray.push(i)
    }
  }

  calculateRating(rating: number) {
    if (this.readonly) return
    this.ratingUpdated.emit(rating)
  }

  iconStatus(index: number) {
    if (this.rating >= index + 1) {
      return 'mdi-star'
    } else {
      return "mdi-star-outline"
    }
  }

  ngOnInit(): void {
  }
}
