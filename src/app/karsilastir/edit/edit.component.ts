import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ozellik} from '../../shared/ozellik.model';
import {KarsilastirService} from '../karsilastir.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit , OnDestroy {
  @ViewChild('f') krsForm: NgForm;
  subsciption: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ozellik;
  constructor(private krsService: KarsilastirService) { }

  ngOnInit() {
    this.subsciption = this.krsService.baslaDuzenle
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.krsService.getOzellikleri(index);
          this.krsForm.setValue({
            series: this.editedItem.series,
            Cpu: this.editedItem.Cpu,
            dpGB: this.editedItem.dpGB,
            rGB: this.editedItem.rGB,
            btry: this.editedItem.btry
          });
        }
      );
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const  newOzellik = new Ozellik(value.series , value.Cpu , value.dpGB , value.rGB , value.btry);
    if (this.editMode) {
      this.krsService.duzenleOzellik(this.editedItemIndex, newOzellik);
    }else {
      this.krsService.addOzellik(newOzellik);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }
  onClear() {
    this.krsForm.reset();
    this.editMode = false;
  }
  onSil() {
    this.krsService.silOzellik(this.editedItemIndex);
    this.onClear();
  }
}
