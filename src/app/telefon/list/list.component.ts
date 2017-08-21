import {Component, OnInit} from '@angular/core';
import {Telefon} from '../telefon.model';
import {TelefonService} from '../telefon.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  telefonlar: Telefon[];
  constructor(private telefonService: TelefonService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.telefonService.telefonChange
      .subscribe(
        (telefonlar: Telefon[]) => {
          this.telefonlar = telefonlar;
        }
      );
    this.telefonlar = this.telefonService.getTelefonlar();
  }
  onYeniTelefon() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
