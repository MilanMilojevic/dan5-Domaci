import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: '<p [ngStyle]="{ color: isEven ? \'blue\' : \'black\' }">Even - {{ number }}</p>',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {
  @Input() number: number;
  get isEven(): boolean {
    return this.number % 2 === 0;
  }
}
