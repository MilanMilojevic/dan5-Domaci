import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnDestroy {
  @Output() numberEmitted = new EventEmitter<number>();
  intervalRef: any;
  isGameRunning = false;
  count = 0;

  startGame() {
    if (!this.isGameRunning) {
      this.isGameRunning = true;
      this.intervalRef = setInterval(() => {
        this.count++;
        this.numberEmitted.emit(this.count);
      }, 1000);
    }
  }

  stopGame() {
    if (this.isGameRunning) {
      this.isGameRunning = false;
      clearInterval(this.intervalRef);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalRef);
  }
}
