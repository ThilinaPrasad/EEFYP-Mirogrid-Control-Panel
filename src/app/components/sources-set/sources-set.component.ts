import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sources-set',
  templateUrl: './sources-set.component.html',
  styleUrls: ['./sources-set.component.scss']
})
export class SourcesSetComponent implements OnInit {

  girdConnStatus = 'OFF';
  dieselGenStatus = 'OFF';
  solarPvStatus = 'ON';
  batteryPercentage = 20;
  constructor() { }

  ngOnInit() {
  }

}
