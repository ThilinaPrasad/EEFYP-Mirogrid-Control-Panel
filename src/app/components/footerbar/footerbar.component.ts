import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrls: ['./footerbar.component.css']
})
export class FooterbarComponent implements OnInit {
  @Input()
  textColor = 'white';
  year;
  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
