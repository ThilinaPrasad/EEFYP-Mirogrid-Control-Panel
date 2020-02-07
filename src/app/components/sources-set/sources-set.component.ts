import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../../services/conns/connection.service';

@Component({
  selector: 'app-sources-set',
  templateUrl: './sources-set.component.html',
  styleUrls: ['./sources-set.component.scss']
})
export class SourcesSetComponent implements OnInit {

  girdConn;
  windGenConn;
  solarPvConn;
  batteryConn;

  constructor(private connections: ConnectionService) {
    // Battery agent Data
    connections.getConnData('battery_conn').subscribe((data: any) => {
      this.batteryConn = data;
    });

    // Grid conn data
    connections.getConnData('grid_conn').subscribe((data: any) => {
      this.girdConn = data;
    });

    // Diesel conn data
    connections.getConnData('wind_gen_conn').subscribe((data: any) => {
      this.windGenConn = data;
    });

    // Solar PV conn data
    connections.getConnData('solar_pv_conn').subscribe((data: any) => {
      this.solarPvConn = data;
    });
    }

  ngOnInit() {
  }

}
