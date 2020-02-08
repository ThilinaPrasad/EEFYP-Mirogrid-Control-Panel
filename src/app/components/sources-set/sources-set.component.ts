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
      this.batteryConn.lastchecked = new Date();
    });

    // Grid conn data
    connections.getConnData('grid_conn').subscribe((data: any) => {
      this.girdConn = data;
      this.girdConn.lastchecked = new Date();
    });

    // Wind conn data
    connections.getConnData('wind_gen_conn').subscribe((data: any) => {
      this.windGenConn = data;
      this.windGenConn.lastchecked = new Date();
    });

    // Solar PV conn data
    connections.getConnData('solar_pv_conn').subscribe((data: any) => {
      this.solarPvConn = data;
      this.solarPvConn.lastchecked = new Date();
    });
    }

  ngOnInit() {
  }

}
