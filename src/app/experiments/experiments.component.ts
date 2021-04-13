import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experiments",
  templateUrl: "./experiments.component.html",
  styleUrls: ["./experiments.component.css"],
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = [
    "Moon soil sample",
    "Plant growth in orbit",
    "Human bone density changes",
    "Water droplet podcast for grades K-5",
    "Satellite launch",
  ];
  activeExperiments: string[] = [];

  constructor() {}

  ngOnInit() {}

  addExperiment(experiment): void {
    const index = this.activeExperiments.indexOf(experiment);
    if (index < 0) {
      this.activeExperiments.push(experiment);
    }
  }

  removeExperiment(experiment): void {
    const index = this.activeExperiments.indexOf(experiment);
    this.activeExperiments.splice(index, 1);
  }
}
