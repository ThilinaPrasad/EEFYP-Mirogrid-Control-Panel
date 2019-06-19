declare var $: any;

import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private titleService: Title) {
    this.titleService.setTitle('EEFYP | Home');
    $('.carousel').carousel();
  }

  ngOnInit() {
  }

}
