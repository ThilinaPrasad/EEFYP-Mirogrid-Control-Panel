import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-operational-results-page',
  templateUrl: './operational-results-page.component.html',
  styleUrls: ['./operational-results-page.component.css']
})
export class OperationalResultsPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('EEFYP | Operational & Results');
  }

  ngOnInit() {
  }

}
