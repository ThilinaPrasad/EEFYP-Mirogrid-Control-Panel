import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agents-set',
  templateUrl: './agents-set.component.html',
  styleUrls: ['./agents-set.component.scss']
})
export class AgentsSetComponent implements OnInit {

  mainAgent = 'ACTIVE';
  solarPvAgent = 'ACTIVE';
  dieselGenAgent = 'TERMINATED';
  batteryAgent = 'ACTIVE';
  loadAgent = 'ACTIVE';

  batteryPercentage = 20;


  modelTitle = 'Main Agent';
  agentVoltage = 0;
  agentCurrent = 0;
  agentPower = 0;
  agentStatus = 'TERMINATED';
  constructor() { }

  ngOnInit() {
  }

  loadAgentValues(id) {
    switch (id) {
      case 0:
        this.modelTitle = 'Main Agent';
        this.agentStatus = this.mainAgent;
        break;
      case 1:
        this.modelTitle = 'Solar PV Agent';
        this.agentStatus = this.solarPvAgent;
        break;
      case 2:
        this.modelTitle = 'Diesel Gen. Agent';
        this.agentStatus = this.dieselGenAgent;
        break;
      case 3:
        this.modelTitle = 'Load Agent';
        this.agentStatus = this.loadAgent;
        break;
    }
  }
}
