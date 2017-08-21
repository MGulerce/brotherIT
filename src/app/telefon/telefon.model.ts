import {Ozellik} from '../shared/ozellik.model';

export class Telefon {
  constructor(public brand: string , public series: string , public imagePath: string, public ozellik: Ozellik[]) {}
}
