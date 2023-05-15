import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: '<p [ngStyle]="{ color: isOdd ? \'red\' : \'black\' }">Odd - {{ number }}</p>',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
  @Input() number: number;
  get isOdd(): boolean {
    return this.number % 2 !== 0;
  }
}
