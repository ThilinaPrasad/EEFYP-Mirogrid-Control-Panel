import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../../services/conns/connection.service';

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

  constructor(private connections: ConnectionService) {
    // Battery agent Data
    connections.getConnData('battery_conn').subscribe((data: any) => {
      this.batteryPercentage = data.presentage;
    });

    // Grid conn data
    connections.getConnData('grid_conn').subscribe((data: any) => {
      this.girdConnStatus = data.status ? 'ON' : 'OFF';
    });

    // Diesel conn data
    connections.getConnData('diesel_gen_conn').subscribe((data: any) => {
      this.dieselGenStatus = data.status ? 'ON' : 'OFF';
    });

    // Solar PV conn data
    connections.getConnData('solar_pv_conn').subscribe((data: any) => {
      this.solarPvStatus = data.status ? 'ON' : 'OFF';
    });
    }

  ngOnInit() {
  }

}
