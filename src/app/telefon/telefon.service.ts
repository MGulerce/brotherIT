import {Injectable} from '@angular/core';

import {Telefon} from './telefon.model';
import {Ozellik} from '../shared/ozellik.model';
import {KarsilastirService} from '../karsilastir/karsilastir.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class TelefonService {
  telefonChange = new Subject<Telefon[]>();
  private telefonlar: Telefon[] = [];
  constructor(private krsService: KarsilastirService) {}
  setTelefonlar(telefonlar: Telefon[]) {
    this.telefonlar =  telefonlar;
    this.telefonChange.next(this.telefonlar.slice());
  }
   getTelefonlar() {
     return this.telefonlar.slice();
   }
   getTelefon(index: number) {
     return this.telefonlar[index];
   }
  addOzellikToKarsilastir(ozellik: Ozellik[]) {
    this.krsService.addOzellikleri(ozellik);
  }
  telefonEkle(telefon: Telefon) {
    this.telefonlar.push(telefon);
    this.telefonChange.next(this.telefonlar.slice());
  }
  guncelleTelefoon(index: number, newTelefon: Telefon) {
    this.telefonlar[index] = newTelefon;
    this.telefonChange.next(this.telefonlar.slice());
  }
  silTelefon(index: number) {
    this.telefonlar.splice(index, 1);
    this.telefonChange.next(this.telefonlar.slice());
  }
}
