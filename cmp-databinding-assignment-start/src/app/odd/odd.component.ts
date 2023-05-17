import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: '<p class="odd" *ngIf="isOdd">Odd - {{ number }}</p>',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnChanges {
  @Input() number: number;
  isOdd = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.number) {
      this.isOdd = this.number % 2 !== 0;
    }
  }
}
