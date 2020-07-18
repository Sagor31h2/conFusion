import { LeaderService } from "./../services/leader.service";
import { LEADERS } from "./../shared/leaders";
import { Component, OnInit } from "@angular/core";
import { Leader } from "../shared/leader";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  constructor(private leaderServic: LeaderService) {}

  ngOnInit() {
    this.leaderServic.getLeaders().then((leaders) => (this.leaders = leaders));
  }
}
