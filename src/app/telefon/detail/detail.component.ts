import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Telefon} from '../telefon.model';
import {TelefonService} from '../telefon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
   telefon: Telefon;
   id: number;
  constructor(private telefonService: TelefonService,
               private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.telefon = this.telefonService.getTelefon(this.id);
        }
      );
  }
  onEkleToKarsilastir() {
    this.telefonService.addOzellikToKarsilastir(this.telefon.ozellik);
  }
  onDuzenleTelefon() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }
  onSilTelefon() {
    this.telefonService.silTelefon(this.id);
    this.router.navigate(['/telefon']);
  }
}
