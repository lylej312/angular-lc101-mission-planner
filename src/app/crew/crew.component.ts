import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.css"],
})
export class CrewComponent implements OnInit {
  crew: object[] = [];
  currPhoto: string = "";
  currID: number = null;
  displayImage: boolean = false;

  candidates: object[] = [
    {
      name: "Sally Ride",
      photo:
        "https://handlers.education.launchcode.org/static/images/sally-ride.jpg",
      astronautID: 457,
    },
    {
      name: "Mae Jemison",
      photo:
        "https://handlers.education.launchcode.org/static/images/mae-jemison.jpg",
      astronautID: 276,
    },
    {
      name: "Ellen Ochoa",
      photo:
        "https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg",
      astronautID: 112,
    },
    {
      name: "Frederick Gregory",
      photo:
        "https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg",
      astronautID: 900,
    },
    {
      name: "Guion Bluford",
      photo:
        "https://handlers.education.launchcode.org/static/images/guion-bluford.jpg",
      astronautID: 388,
    },
    {
      name: "Kjell Lindgren",
      photo:
        "https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg",
      astronautID: 209,
    },
    {
      name: "Jeanette Epps",
      photo:
        "https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg",
      astronautID: 444,
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
    const id = candidate["astronautID"];
    this.currPhoto = photo;
    this.currID = id;
  }

  emptyCrew(): void {
    for (let i = 0; i < this.crew.length; i++) {
      const member = this.crew[i];
      member["inCrew"] = false;
    }
    this.crew = [];
  }
}
