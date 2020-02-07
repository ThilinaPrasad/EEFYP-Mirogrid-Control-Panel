import { Component, OnInit } from '@angular/core';
import {AgentService} from '../../services/agents/agent.service';

@Component({
  selector: 'app-agents-set',
  templateUrl: './agents-set.component.html',
  styleUrls: ['./agents-set.component.scss']
})
export class AgentsSetComponent implements OnInit {

  serverAgent;
  solarPvAgent;
  windGenAgent;
  // tslint:disable-next-line:variable-name
  loadAgent_1;
  // tslint:disable-next-line:variable-name
  loadAgent_2;

  // batteryAgent;
  // batteryPercentage = 20;


  modelTitle = 'Main Agent';
  modelLoadedAgent = {property_1: {name: 'Status', value: 1},
    property_2: {name: 'Voltage (V)', value: 55},
    property_3: {name: 'Current (A)', value: 60},
    property_4: {name: 'Power (W)', value: 60}

  };


  constructor(private agentService: AgentService) {
    // Server agent
    agentService.getAgentData('serverAgent').subscribe((data) => {
      this.serverAgent = data;
    });

    // Solar PV agent
    agentService.getAgentData('solarAgent').subscribe((data) => {
      this.solarPvAgent = data;
    });

    // Wind Gen. agent
    agentService.getAgentData('windAgent').subscribe((data) => {
      this.windGenAgent = data;
    });

    // Load Agent 01 agent
    agentService.getAgentData('loadAgent_1').subscribe((data) => {
      this.loadAgent_1 = data;
    });

    // Load Agent 02 agent
    agentService.getAgentData('loadAgent_2').subscribe((data) => {
      this.loadAgent_2 = data;
      this.loadAgent_2.checked = new Date();
    });
  }

  ngOnInit() {
  }

  loadAgentValues(id) {
    switch (id) {
      case 0:
        this.modelTitle = 'Server Agent';
        this.agentService.getAgentData('serverAgent').subscribe((data: any) => {
          this.serverAgent = data;
          this.modelLoadedAgent.property_1.value = data.status;
          this.modelLoadedAgent.property_2.name = 'Current (A)';
          this.modelLoadedAgent.property_2.value =  data.current;
          this.modelLoadedAgent.property_3.name = 'Power In (W)';
          this.modelLoadedAgent.property_3.value =  data.power_in;
          this.modelLoadedAgent.property_4.name = 'Power Out (W)';
          this.modelLoadedAgent.property_4.value =  data.power_out;
        });
        break;
      case 1:
        this.modelTitle = 'Solar PV Agent';
        this.agentService.getAgentData('solarAgent').subscribe((data: any) => {
          this.modelLoadedAgent.property_1.value = data.status;
          this.modelLoadedAgent.property_2.name = 'Voltage (V)';
          this.modelLoadedAgent.property_2.value = data.voltage;
          this.modelLoadedAgent.property_3.name = 'Current (A)';
          this.modelLoadedAgent.property_3.value = data.current;
          this.modelLoadedAgent.property_4.name = 'Power (W)';
          this.modelLoadedAgent.property_4.value = data.power;
        });
        break;
      case 2:
        this.modelTitle = 'Wind Gen. Agent';
        this.agentService.getAgentData('windAgent').subscribe((data: any) => {
          this.modelLoadedAgent.property_1.value = data.status;
          this.modelLoadedAgent.property_2.name = 'Voltage (V)';
          this.modelLoadedAgent.property_2.value = data.voltage;
          this.modelLoadedAgent.property_3.name = 'Current (A)';
          this.modelLoadedAgent.property_3.value = data.current;
          this.modelLoadedAgent.property_4.name = 'Power (W)';
          this.modelLoadedAgent.property_4.value = data.power;
        });
        break;
      case 3:
        this.modelTitle = 'Load Agent 01';
        this.agentService.getAgentData('loadAgent_1').subscribe((data: any) => {
          this.modelLoadedAgent.property_1.value = data.status;
          this.modelLoadedAgent.property_2.name = 'Voltage (V)';
          this.modelLoadedAgent.property_2.value = data.voltage;
          this.modelLoadedAgent.property_3.name = 'Current (A)';
          this.modelLoadedAgent.property_3.value = data.current;
          this.modelLoadedAgent.property_4.name = 'Power (W)';
          this.modelLoadedAgent.property_4.value = data.power;
        });
        break;
      case 4:
        this.modelTitle = 'Load Agent 02';
        this.agentService.getAgentData('loadAgent_2').subscribe((data: any) => {
          this.modelLoadedAgent.property_1.value = data.status;
          this.modelLoadedAgent.property_2.name = 'Voltage (V)';
          this.modelLoadedAgent.property_2.value = data.voltage;
          this.modelLoadedAgent.property_3.name = 'Current (A)';
          this.modelLoadedAgent.property_3.value = data.current;
          this.modelLoadedAgent.property_4.name = 'Power (W)';
          this.modelLoadedAgent.property_4.value = data.power;
        });
        break;
      default:
        break;
    }
  }
}
