import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {TelefonService} from '../telefon.service';;

@Component({
  selector: 'app-telefon-edit',
  templateUrl: './telefon-edit.component.html',
  styleUrls: ['./telefon-edit.component.css']
})
export class TelefonEditComponent implements OnInit {
  id:  number;
  editMode = false;
  telefonForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private telefonService: TelefonService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  onSubmit() {
    // const newTelefon = new Telefon(
    //   this.telefonForm.value['brand'],
    //   this.telefonForm.value['series'],
    //   this.telefonForm.value['imagePath'],
    //   this.telefonForm.value['ozellik']);
    if (this.editMode) {
      this.telefonService.guncelleTelefoon(this.id, this.telefonForm.value);
    } else {
      this.telefonService.telefonEkle(this.telefonForm.value);
    }
    this.onCancel();
  }
  private initForm() {
    let telefonBrand = '';
    let telefonImagePath = '';
    let telefonSeries = '';
    let telefonOzellik = new FormArray([]);

    if (this.editMode) {
      const telefon = this.telefonService.getTelefon(this.id);
      telefonBrand = telefon.brand;
      telefonImagePath = telefon.imagePath;
      telefonSeries = telefon.series;
      if (telefon['ozellik']) {
        for (let oz of telefon.ozellik) {
          telefonOzellik.push(
            new FormGroup({
              'series' : new FormControl(oz.series, Validators.required),
              'Cpu' : new FormControl(oz.Cpu),
              'dpGB' : new FormControl(oz.dpGB),
              'rGB' : new FormControl(oz.rGB),
              'btry' : new FormControl(oz.btry)
            })
          );
        }
      }
    }
    this.telefonForm = new FormGroup({
      'brand': new FormControl(telefonBrand, Validators.required),
      'imagePath': new FormControl(telefonImagePath, Validators.required),
      'series': new FormControl(telefonSeries, Validators.required),
      'ozellik': telefonOzellik
    });
  }
  // burası opsiyonek kaldıralabilr
  onEkleOzellik() {
    (<FormArray>this.telefonForm.get('ozellik')).push(
      new FormGroup({
        'series': new FormControl(null, Validators.required),
        'Cpu': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
        'dpGB': new FormControl([
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
        'rGB': new FormControl([
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
        'btry': new FormControl([
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onSilOzellik(index: number) {
    (<FormArray>this.telefonForm.get('ozellik')).removeAt(index);
  }
}
