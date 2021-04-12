import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.css"],
})
export class CrewComponent implements OnInit {
  crew: object[] = [];
  currPhoto: string = "";
  displayImage: boolean = false;

  candidates: object[] = [
    {
      name: "Sally Ride",
      photo:
        "https://handlers.education.launchcode.org/static/images/sally-ride.jpg",
    },
    {
      name: "Mae Jemison",
      photo:
        "https://handlers.education.launchcode.org/static/images/mae-jemison.jpg",
    },
    {
      name: "Ellen Ochoa",
      photo:
        "https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg",
    },
    {
      name: "Frederick Gregory",
      photo:
        "https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg",
    },
    {
      name: "Guion Bluford",
      photo:
        "https://handlers.education.launchcode.org/static/images/guion-bluford.jpg",
    },
    {
      name: "Kjell Lindgren",
      photo:
        "https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg",
    },
    {
      name: "Jeanette Epps",
      photo:
        "https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg",
    },
  ];

  constructor() {}

  ngOnInit() {}

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate: object): void {
    const index = this.crew.indexOf(candidate);
    if (index < 0 && this.crew.length < 3) {
      candidate["inCrew"] = true;
      this.crew.push(candidate);
    } else if (index > -1) {
      candidate["inCrew"] = false;
      this.crew.splice(index, 1);
    }
  }

  findImage(candidate: object): void {
    const photo = candidate["photo"];
    this.currPhoto = photo;
  }
}
