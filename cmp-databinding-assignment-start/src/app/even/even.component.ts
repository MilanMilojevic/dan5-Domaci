import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  template: '<p class="even" *ngIf="isEven">Even - {{ number }}</p>',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnChanges {
  @Input() number: number;
  isEven = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.number) {
      this.isEven = this.number % 2 === 0;
    }
  }
}
