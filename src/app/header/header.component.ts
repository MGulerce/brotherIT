import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }
  onKaydet() {
    this.dataStorageService.storeTelefon()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
  onGetir() {
    this.dataStorageService.getTelefon();
  }
}
