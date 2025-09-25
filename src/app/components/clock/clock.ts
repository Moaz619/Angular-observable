import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css',
})
export class Clock implements OnInit, OnDestroy {
  timeSpent: number = 0;
  interval!: number;
  ngOnInit(): void {
    this.startInterval();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.timeSpent = 0;
    console.log('interval cleared');
  }
  startInterval() {
    this.interval = setInterval(() => {
      this.timeSpent++;
    }, 1000);
  }
}
