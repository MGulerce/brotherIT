import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ozellik} from '../shared/ozellik.model';
import {KarsilastirService} from './karsilastir.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-karsilastir',
  templateUrl: './karsilastir.component.html',
  styleUrls: ['./karsilastir.component.css']
})
export class KarsilastirComponent implements OnInit, OnDestroy {
  ozellik: Ozellik[];
  private subsciption: Subscription;

  constructor(private krsService: KarsilastirService) { }

  ngOnInit() {
    this.ozellik = this.krsService.getOzellik();
    this.subsciption = this.krsService.ozellikChange
      .subscribe(
        (ozellik: Ozellik[]) => {
          this.ozellik = ozellik;
        }
      );
  }
  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }
  onDuzenleItem(index: number) {
    this.krsService.baslaDuzenle.next(index);
  }
}
