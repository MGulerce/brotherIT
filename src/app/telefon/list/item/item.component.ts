import {Component, Input, OnInit} from '@angular/core';

import {Telefon} from '../../telefon.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() tel: Telefon;
  @Input() index: number;

  ngOnInit() {
  }
}
