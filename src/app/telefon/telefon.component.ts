import { Component, OnInit } from '@angular/core';

import {TelefonService} from './telefon.service';

@Component({
  selector: 'app-telefon',
  templateUrl: './telefon.component.html',
  styleUrls: ['./telefon.component.css'],
  providers: [TelefonService]
})
export class TelefonComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
