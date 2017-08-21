import {Injectable} from '@angular/core';

import {Telefon} from './telefon.model';
import {Ozellik} from '../shared/ozellik.model';
import {KarsilastirService} from '../karsilastir/karsilastir.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class TelefonService {
  telefonChange = new Subject<Telefon[]>();
  private telefonlar: Telefon[] = [
    new Telefon('Samsung' , 'Galaxy S8+'
      , 'https://img-samsung.mncdn.com/Content/' +
      'Images/Thumbs/0004265_galaxy-s8.jpeg',
      [
        new Ozellik('S8+', 2.3, 64, 4, 3500)
      ]),
    new Telefon('Mi', 'RedMi Note4'
      , 'https://img-samsung.mncdn.com/C' +
      'ontent/Images/Thumbs/0010451_samsung-galaxy-j7-2016-beyaz-cep-telefonu.jpeg',
      [
        new Ozellik('RedMi Note4', 2.0 , 64, 4, 4100)
      ])
  ];
  constructor(private krsService: KarsilastirService) {}
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
}
