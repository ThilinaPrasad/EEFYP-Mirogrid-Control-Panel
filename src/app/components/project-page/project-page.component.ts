import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

    sideMenuOpen = false;

  constructor(private titleService: Title) {
    this.titleService.setTitle('EEFYP | Project');
  }

  ngOnInit() {
  }

  sidemenuToggle() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }

}
