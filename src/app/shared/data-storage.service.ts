
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {TelefonService} from '../telefon/telefon.service';
import {Telefon} from '../telefon/telefon.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private telefonService: TelefonService) {}

  storeTelefon() {
    return this.http.put('https://testcase-28a39.firebaseio.com/telefonlar.json', this.telefonService
      .getTelefonlar());
  }

  getTelefon() {
    this.http.get('https://testcase-28a39.firebaseio.com/telefonlar.json')
      .map(
        (response: Response) => {
          const telefonlar: Telefon[] = response.json();
          for ( let telefon of telefonlar) {
            if (!telefon['ozellik']) {
              telefon['ozellik'] = [];
            }
          }
          return telefonlar;
        }
      )
      .subscribe(
        (telefonlar: Telefon[]) => {
          this.telefonService.setTelefonlar(telefonlar);
        }
      );
  }

}
