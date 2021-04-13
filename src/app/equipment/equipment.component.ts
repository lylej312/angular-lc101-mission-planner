import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
  equipmentItems: object[] = [
    { name: "Duct Tape", mass: 0.5 },
    { name: "Space Camera", mass: 20 },
    { name: "Food", mass: 150 },
    { name: "Oxygen Tanks", mass: 400 },
    { name: "AE-35 Unit", mass: 5 },
    { name: "ISS Supplies", mass: 800 },
    { name: "Water", mass: 250 },
    { name: "Satellite", mass: 1200 },
    { name: "R2 Unit", mass: 32 },
  ];
  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;
  nearMaxMass: boolean = false;

  constructor() {}

  ngOnInit() {}

  // Code your addItem function here:
  addItem(equipmentItem: object): void {
    let n = 0;
    for (let i = 0; i < this.cargoHold.length; i++) {
      let currItemInCargo = this.cargoHold[i];
      if (equipmentItem === currItemInCargo) {
        n++;
      }
    }

    if (n < 1) {
      equipmentItem["maxItem"] = false;
      this.cargoHold.push(equipmentItem);
      this.cargoMass = this.cargoMass + equipmentItem["mass"];
    } else if (n === 1) {
      equipmentItem["maxItem"] = true;
      this.cargoHold.push(equipmentItem);
      this.cargoMass = this.cargoMass + equipmentItem["mass"];
    }

    if (this.cargoMass > 1799) {
      this.nearMaxMass = true;
    } else {
      this.nearMaxMass = false;
    }
  }

  removeItem(equipmentItem): void {
    const index = this.cargoHold.indexOf(equipmentItem);
    const equipmentItemMass = equipmentItem["mass"];
    this.cargoHold.splice(index, 1);
    this.cargoMass = this.cargoMass - equipmentItemMass;
  }

  emptyHold() {
    this.cargoHold = [];
    this.cargoMass = 0;
    this.nearMaxMass = false;
  }
}
