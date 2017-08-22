import {Ozellik} from '../shared/ozellik.model';
import {Subject} from 'rxjs/Subject';

export class KarsilastirService {
  ozellikChange = new Subject<Ozellik[]>();
  baslaDuzenle = new Subject<number>();
  private ozellik: Ozellik[] = [];
  getOzellik() {
    return this.ozellik.slice();
  }
  getOzellikleri(index: number) {
    return this.ozellik[index];
  }
  addOzellik(ozellik: Ozellik) {
    this.ozellik.push(ozellik);
    this.ozellikChange.next(this.ozellik.slice());
  }
  addOzellikleri(ozellik: Ozellik[]) {
    // for (let ozellik of ozellikler) {
    //   this.addOzellikleri(ozellik);
    // }
    this.ozellik.push(...ozellik);
    this.ozellikChange.next(this.ozellik.slice());
  }
  duzenleOzellik(index: number, newOzellik: Ozellik) {
    this.ozellik[index] = newOzellik;
    this.ozellikChange.next(this.ozellik.slice());
  }
  silOzellik(index: number) {
    this.ozellik.splice(index, 1);
    this.ozellikChange.next(this.ozellik);
  }
}
